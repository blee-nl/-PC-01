import React, { useState, useEffect } from "react";
import { sortStringArray } from "~/helpers";
import { getCompareProducts } from "#/service";
import { CheckboxGroup, StickyHead } from "~/components";
import ProductComparisonPageWrapper from "./ProductComparisonPageWrapper";
import CardList from "./CardList";
import CompareBody from "./CompareBody";

// products data organiser
const getOrganisedProducts = (products) => {
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

const ProductComparisonPage = () => {
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
  const [selectedProductIds, setSelectedProductIds] = useState([]);

  useEffect(() => {
    setSelectedProductIds(
      productsData.productIds ? productsData.productIds : []
    );
  }, [productsData]);

  const onChange = (id) => {
    const checkboxGroupValue = [...selectedProductIds];
    if (checkboxGroupValue.indexOf(id) === -1) {
      checkboxGroupValue.push(id);
    } else {
      checkboxGroupValue.splice(checkboxGroupValue.indexOf(id), 1);
    }
    setSelectedProductIds(checkboxGroupValue);
  };

  const showTable =
    !loading && productsData && parsedProducts && productIds && productInfoKeys;

  return (
    <ProductComparisonPageWrapper numberOfItems={selectedProductIds.length}>
      <div className="title">Compare</div>
      {loading && <div> loading </div>}
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
