import React, { useState, useEffect } from "react";
import { sortStringArray } from "~/helpers";
import { getCompareProducts } from "#/service";
import { CheckboxGroup, StickyHead } from "~/components";
import ProductComparisonPageWrapper from "./ProductComparisonPageWrapper";
import CardList from "./CardList";
import CompareBody from "./CompareBody";

// Products data organiser :
// Arg products is an array of objects
// Return { parsedProducts , productIds, productInfoKeys }
// parsedProducts is an object of objects . object key is using product Artikelnummer
// productIds is an Artikelnummer array
// productInfoKeys is a sorted Array of product information names, filtered out productimage , atp value.
//  productInfoKeys badges value is the first and other values are alphabatically sorted.
export const getOrganisedProducts = (products) => {
  if (!products || products.length === 0) {
    return {};
  }
  const parsedProducts = products.reduce(
    (acc, it) => ((acc[it.Artikelnummer] = it), acc),
    {}
  );

  const productIds = products.map((product) => product.Artikelnummer);
  const productInfoKeys = sortStringArray(
    Object.keys(products[0]).filter(
      (key) => key !== "badges" && key !== "productImage" && key !== "atp"
    )
  );
  productInfoKeys.unshift("badges");

  return { parsedProducts, productIds, productInfoKeys };
};

export const ProductComparisonPage = () => {
  const [loading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState({});

  useEffect(() => {
    let RenderBeginning = true;

    setLoading(true);
    async function readData() {
      try {
        const response = await getCompareProducts();
        if (response.status === 404) {
          throw new Error(`api product comparison not found`);
        }
        if (RenderBeginning) {
          const data = response.data?.products;
          let organisedData = getOrganisedProducts(data);
          setProductsData(organisedData);
          setLoading(false);
        }
      } catch (err) {
        if (RenderBeginning) {
          console.log("error message: ", err.message);
          setLoading(false);
        }
      }
    }
    readData();
    return () => {
      RenderBeginning = false;
    };
  }, []);

  const { parsedProducts, productIds, productInfoKeys } = productsData;

  //selectedProductIds is used for cardList and checkbox group
  const [selectedProductIds, setSelectedProductIds] = useState([]);

  useEffect(() => {
    setSelectedProductIds(
      productsData.productIds ? productsData.productIds : []
    );
  }, [productsData]);

  // This function allows updatsed selected product id(selectedProductIds)
  const onChange = (id) => {
    const checkboxGroupValue = [...selectedProductIds];
    if (checkboxGroupValue.indexOf(id) === -1) {
      checkboxGroupValue.push(id);
    } else {
      checkboxGroupValue.splice(checkboxGroupValue.indexOf(id), 1);
    }
    setSelectedProductIds(checkboxGroupValue);
  };

  // table will not show when it is loading || not product data
  const showTable =
    !loading && productsData && parsedProducts && productIds && productInfoKeys;

  return (
    <ProductComparisonPageWrapper numberOfItems={selectedProductIds.length}>
      <div className="title">Compare</div>
      {loading && <div data-testid="loading"> Loading.. </div>}
      {showTable && (
        <div className="compare-wrapper">
          <StickyHead className="header-block">
            <div className="list-header-row">
              <CheckboxGroup
                minimumSelection={1}
                currentSelected={selectedProductIds}
                subjects={productIds}
                list={parsedProducts}
                onChange={onChange}
                direction="column"
              />
              <CardList
                cardListInfo={parsedProducts}
                onDelete={onChange}
                cardIds={selectedProductIds}
                deleteDisable={selectedProductIds.length <= 1}
              />
            </div>
          </StickyHead>
          <CompareBody
            productIds={selectedProductIds}
            productsInfo={parsedProducts}
            productInfoKeys={productInfoKeys}
          />
        </div>
      )}
    </ProductComparisonPageWrapper>
  );
};

export default ProductComparisonPage;
