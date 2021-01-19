import React from "react";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";

// axiosMock from "axios" :not real axios module, it is from mock file.
import axiosMock from "axios";
import ProductComparisonPage, { getOrganisedProducts } from "../index";

describe("ProductComparisonPage functional test", () => {
  afterEach(cleanup);
  it("fetches products data", async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: {
        products: [
          {
            Toepassing: "Voedsel en dranken",
            salePrice: "0.66",
            manufacturerName: "",
            Hardheid: "70",
            grossPrice: "0.80",
            BUP_UOM: "",
            Artikelnummer: "115576",
            stepQuantity: "5",
            BUP_Value: "",
            badges:
              "https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/o-t-symbol-icon-nl.jpg",
            uom: "Stuk",
            Kleur: "Zwart",
            productImage:
              "https://eriksdigitalcdn.azureedge.net/shop/thumb/hlr-system/webshop/grs/grs-product-images/grs10/10775_fot_012.jpg",
            Temperatuurgebied: "van  -50  tot  150",
            BUP_Conversion: "",
            minQuantity: "5",
            manufacturerImage: "",
            name:
              "O-ring EPDM 70 shore - Voedsel (Binnen Ø=2.9 Snoer Ø=1.78; AS568- 006)",
            Materiaal: "EPDM",
            sku: "115576",
            Snoerdikte: "1.78",
            "Inwendige diameter": "2.9",
            "Maat volgens AS568": "6",
            listPrice: "0.66",
            channel: "nl_NL",
            display: true,
            atp: {},
          },
        ],
      },
      status: 200,
    });
    const { getByTestId } = render(<ProductComparisonPage />);
    expect(getByTestId("loading")).toHaveTextContent("Loading..");
    await waitFor(() => expect(axiosMock.get).toHaveBeenCalledTimes(1));
  });
  it("fetches products data", async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: {
        products: [
          {
            Toepassing: "Voedsel en dranken",
            salePrice: "1.41",
            manufacturerName: "",
            Hardheid: "70",
            grossPrice: "1.71",
            BUP_UOM: "",
            Artikelnummer: "115E19",
            stepQuantity: "5",
            BUP_Value: "",
            badges:
              "https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/omega-slang-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/o-t-symbol-icon-nl.jpg",
            uom: "Stuk",
            Kleur: "Zwart",
            productImage:
              "https://eriksdigitalcdn.azureedge.net/shop/thumb/hlr-system/egt/pubnl/industriele slangen/rubber slangen/chemieslangen/rubber-chemieslang-rx-ultrafixx-md-pinl-nl.jpg",
            Temperatuurgebied: "van  -50  tot  150",
            BUP_Conversion: "",
            minQuantity: "5",
            manufacturerImage: "",
            name:
              "O-ring EPDM 70 shore - Voedsel (Binnen Ø=1.25 Snoer Ø=2.62; AS568- 102)",
            Materiaal: "EPDM",
            sku: "115E19",
            Snoerdikte: "2.62",
            "Inwendige diameter": "1.25",
            "Maat volgens AS568": "102",
            listPrice: "1.41",
            channel: "nl_NL",
            display: true,
            atp: {},
          },
          {
            Toepassing: "Voedsel en dranken",
            salePrice: "0.66",
            manufacturerName: "",
            Hardheid: "70",
            grossPrice: "0.80",
            BUP_UOM: "",
            Artikelnummer: "11545A",
            stepQuantity: "5",
            BUP_Value: "",
            badges:
              "https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/omega-slang-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/o-t-symbol-icon-nl.jpg",
            uom: "Stuk",
            Kleur: "Zwart",
            productImage:
              "https://eriksdigitalcdn.azureedge.net/shop/thumb/hlr-system/webshop/lag/lag-product-images/lag25/lag00.png",
            Temperatuurgebied: "van  -50  tot  150",
            BUP_Conversion: "",
            minQuantity: "5",
            manufacturerImage: "",
            name:
              "O-ring EPDM 70 shore - Voedsel (Binnen Ø=1.78 Snoer Ø=1.78; AS568- 004)",
            Materiaal: "EPDM",
            sku: "11545A",
            Snoerdikte: "1.78",
            "Inwendige diameter": "1.78",
            "Maat volgens AS568": "4",
            listPrice: "0.66",
            channel: "nl_NL",
            display: true,
            atp: {},
          },
          {
            Toepassing: "Voedsel en dranken",
            salePrice: "1.36",
            manufacturerName: "",
            Hardheid: "70",
            grossPrice: "1.65",
            BUP_UOM: "",
            Artikelnummer: "115E1A",
            stepQuantity: "5",
            BUP_Value: "",
            badges:
              "https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/omega-slang-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/o-t-symbol-icon-nl.jpg",
            uom: "Stuk",
            Kleur: "Zwart",
            productImage:
              "https://eriksdigitalcdn.azureedge.net/shop/thumb/hlr-system/blickle/internet images/lrxa-po_76g-fi_754998.jpg",
            Temperatuurgebied: "van  -50  tot  150",
            BUP_Conversion: "",
            minQuantity: "5",
            manufacturerImage: "",
            name:
              "O-ring EPDM 70 shore - Voedsel (Binnen Ø=2.06 Snoer Ø=2.62; AS568- 103)",
            Materiaal: "EPDM",
            sku: "115E1A",
            Snoerdikte: "2.62",
            "Inwendige diameter": "2.06",
            "Maat volgens AS568": "103",
            listPrice: "1.36",
            channel: "nl_NL",
            display: true,
            atp: {},
          },
        ],
      },
      status: 200,
    });
    const { getByTestId, getAllByTestId } = render(<ProductComparisonPage />);
    expect(getByTestId("loading")).toHaveTextContent("Loading..");
    await waitFor(() => expect(axiosMock.get).toHaveBeenCalled());

    await waitFor(() =>
      expect(getAllByTestId("remove-button")).toHaveLength(3)
    );

    fireEvent.click(getAllByTestId("remove-button")[0]);
    expect(getAllByTestId("remove-button")).toHaveLength(2);
  });
});

describe("getOrganisedProducts", () => {
  it("products arg is [] or null", () => {
    expect(getOrganisedProducts([])).toEqual({});
    expect(getOrganisedProducts()).toEqual({});
  });
  it("products mock and expect result", () => {
    const mockProducts = [
      {
        Toepassing: "Voedsel en dranken",
        salePrice: "1.41",
        manufacturerName: "",
        Hardheid: "70",
        grossPrice: "1.71",
        BUP_UOM: "",
        Artikelnummer: "115E19",
        stepQuantity: "5",
        BUP_Value: "",
        badges:
          "https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/omega-slang-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/o-t-symbol-icon-nl.jpg",
        uom: "Stuk",
        Kleur: "Zwart",
        productImage:
          "https://eriksdigitalcdn.azureedge.net/shop/thumb/hlr-system/egt/pubnl/industriele slangen/rubber slangen/chemieslangen/rubber-chemieslang-rx-ultrafixx-md-pinl-nl.jpg",
        Temperatuurgebied: "van  -50  tot  150",
        BUP_Conversion: "",
        minQuantity: "5",
        manufacturerImage: "",
        name:
          "O-ring EPDM 70 shore - Voedsel (Binnen Ø=1.25 Snoer Ø=2.62; AS568- 102)",
        Materiaal: "EPDM",
        sku: "115E19",
        Snoerdikte: "2.62",
        "Inwendige diameter": "1.25",
        "Maat volgens AS568": "102",
        listPrice: "1.41",
        channel: "nl_NL",
        display: true,
        atp: {},
      },
      {
        Toepassing: "Voedsel en dranken",
        salePrice: "0.66",
        manufacturerName: "",
        Hardheid: "70",
        grossPrice: "0.80",
        BUP_UOM: "",
        Artikelnummer: "11545A",
        stepQuantity: "5",
        BUP_Value: "",
        badges:
          "https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/omega-slang-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/o-t-symbol-icon-nl.jpg",
        uom: "Stuk",
        Kleur: "Zwart",
        productImage:
          "https://eriksdigitalcdn.azureedge.net/shop/thumb/hlr-system/webshop/lag/lag-product-images/lag25/lag00.png",
        Temperatuurgebied: "van  -50  tot  150",
        BUP_Conversion: "",
        minQuantity: "5",
        manufacturerImage: "",
        name:
          "O-ring EPDM 70 shore - Voedsel (Binnen Ø=1.78 Snoer Ø=1.78; AS568- 004)",
        Materiaal: "EPDM",
        sku: "11545A",
        Snoerdikte: "1.78",
        "Inwendige diameter": "1.78",
        "Maat volgens AS568": "4",
        listPrice: "0.66",
        channel: "nl_NL",
        display: true,
        atp: {},
      },
      {
        Toepassing: "Voedsel en dranken",
        salePrice: "1.36",
        manufacturerName: "",
        Hardheid: "70",
        grossPrice: "1.65",
        BUP_UOM: "",
        Artikelnummer: "115E1A",
        stepQuantity: "5",
        BUP_Value: "",
        badges:
          "https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/omega-slang-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/o-t-symbol-icon-nl.jpg",
        uom: "Stuk",
        Kleur: "Zwart",
        productImage:
          "https://eriksdigitalcdn.azureedge.net/shop/thumb/hlr-system/blickle/internet images/lrxa-po_76g-fi_754998.jpg",
        Temperatuurgebied: "van  -50  tot  150",
        BUP_Conversion: "",
        minQuantity: "5",
        manufacturerImage: "",
        name:
          "O-ring EPDM 70 shore - Voedsel (Binnen Ø=2.06 Snoer Ø=2.62; AS568- 103)",
        Materiaal: "EPDM",
        sku: "115E1A",
        Snoerdikte: "2.62",
        "Inwendige diameter": "2.06",
        "Maat volgens AS568": "103",
        listPrice: "1.36",
        channel: "nl_NL",
        display: true,
        atp: {},
      },
      {
        Toepassing: "Voedsel en dranken",
        salePrice: "0.66",
        manufacturerName: "",
        Hardheid: "70",
        grossPrice: "0.80",
        BUP_UOM: "",
        Artikelnummer: "115576",
        stepQuantity: "5",
        BUP_Value: "",
        badges:
          "https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/o-t-symbol-icon-nl.jpg",
        uom: "Stuk",
        Kleur: "Zwart",
        productImage:
          "https://eriksdigitalcdn.azureedge.net/shop/thumb/hlr-system/webshop/grs/grs-product-images/grs10/10775_fot_012.jpg",
        Temperatuurgebied: "van  -50  tot  150",
        BUP_Conversion: "",
        minQuantity: "5",
        manufacturerImage: "",
        name:
          "O-ring EPDM 70 shore - Voedsel (Binnen Ø=2.9 Snoer Ø=1.78; AS568- 006)",
        Materiaal: "EPDM",
        sku: "115576",
        Snoerdikte: "1.78",
        "Inwendige diameter": "2.9",
        "Maat volgens AS568": "6",
        listPrice: "0.66",
        channel: "nl_NL",
        display: true,
        atp: {},
      },
    ];

    const result = {
      parsedProducts: {
        115576: {
          Toepassing: "Voedsel en dranken",
          salePrice: "0.66",
          manufacturerName: "",
          Hardheid: "70",
          grossPrice: "0.80",
          BUP_UOM: "",
          Artikelnummer: "115576",
          stepQuantity: "5",
          BUP_Value: "",
          badges:
            "https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/o-t-symbol-icon-nl.jpg",
          uom: "Stuk",
          Kleur: "Zwart",
          productImage:
            "https://eriksdigitalcdn.azureedge.net/shop/thumb/hlr-system/webshop/grs/grs-product-images/grs10/10775_fot_012.jpg",
          Temperatuurgebied: "van  -50  tot  150",
          BUP_Conversion: "",
          minQuantity: "5",
          manufacturerImage: "",
          name:
            "O-ring EPDM 70 shore - Voedsel (Binnen Ø=2.9 Snoer Ø=1.78; AS568- 006)",
          Materiaal: "EPDM",
          sku: "115576",
          Snoerdikte: "1.78",
          "Inwendige diameter": "2.9",
          "Maat volgens AS568": "6",
          listPrice: "0.66",
          channel: "nl_NL",
          display: true,
          atp: {},
        },
        "115E19": {
          Toepassing: "Voedsel en dranken",
          salePrice: "1.41",
          manufacturerName: "",
          Hardheid: "70",
          grossPrice: "1.71",
          BUP_UOM: "",
          Artikelnummer: "115E19",
          stepQuantity: "5",
          BUP_Value: "",
          badges:
            "https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/omega-slang-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/o-t-symbol-icon-nl.jpg",
          uom: "Stuk",
          Kleur: "Zwart",
          productImage:
            "https://eriksdigitalcdn.azureedge.net/shop/thumb/hlr-system/egt/pubnl/industriele slangen/rubber slangen/chemieslangen/rubber-chemieslang-rx-ultrafixx-md-pinl-nl.jpg",
          Temperatuurgebied: "van  -50  tot  150",
          BUP_Conversion: "",
          minQuantity: "5",
          manufacturerImage: "",
          name:
            "O-ring EPDM 70 shore - Voedsel (Binnen Ø=1.25 Snoer Ø=2.62; AS568- 102)",
          Materiaal: "EPDM",
          sku: "115E19",
          Snoerdikte: "2.62",
          "Inwendige diameter": "1.25",
          "Maat volgens AS568": "102",
          listPrice: "1.41",
          channel: "nl_NL",
          display: true,
          atp: {},
        },
        "11545A": {
          Toepassing: "Voedsel en dranken",
          salePrice: "0.66",
          manufacturerName: "",
          Hardheid: "70",
          grossPrice: "0.80",
          BUP_UOM: "",
          Artikelnummer: "11545A",
          stepQuantity: "5",
          BUP_Value: "",
          badges:
            "https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/omega-slang-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/o-t-symbol-icon-nl.jpg",
          uom: "Stuk",
          Kleur: "Zwart",
          productImage:
            "https://eriksdigitalcdn.azureedge.net/shop/thumb/hlr-system/webshop/lag/lag-product-images/lag25/lag00.png",
          Temperatuurgebied: "van  -50  tot  150",
          BUP_Conversion: "",
          minQuantity: "5",
          manufacturerImage: "",
          name:
            "O-ring EPDM 70 shore - Voedsel (Binnen Ø=1.78 Snoer Ø=1.78; AS568- 004)",
          Materiaal: "EPDM",
          sku: "11545A",
          Snoerdikte: "1.78",
          "Inwendige diameter": "1.78",
          "Maat volgens AS568": "4",
          listPrice: "0.66",
          channel: "nl_NL",
          display: true,
          atp: {},
        },
        "115E1A": {
          Toepassing: "Voedsel en dranken",
          salePrice: "1.36",
          manufacturerName: "",
          Hardheid: "70",
          grossPrice: "1.65",
          BUP_UOM: "",
          Artikelnummer: "115E1A",
          stepQuantity: "5",
          BUP_Value: "",
          badges:
            "https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/omega-slang-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/o-t-symbol-icon-nl.jpg",
          uom: "Stuk",
          Kleur: "Zwart",
          productImage:
            "https://eriksdigitalcdn.azureedge.net/shop/thumb/hlr-system/blickle/internet images/lrxa-po_76g-fi_754998.jpg",
          Temperatuurgebied: "van  -50  tot  150",
          BUP_Conversion: "",
          minQuantity: "5",
          manufacturerImage: "",
          name:
            "O-ring EPDM 70 shore - Voedsel (Binnen Ø=2.06 Snoer Ø=2.62; AS568- 103)",
          Materiaal: "EPDM",
          sku: "115E1A",
          Snoerdikte: "2.62",
          "Inwendige diameter": "2.06",
          "Maat volgens AS568": "103",
          listPrice: "1.36",
          channel: "nl_NL",
          display: true,
          atp: {},
        },
      },
      productIds: ["115E19", "11545A", "115E1A", "115576"],
      productInfoKeys: [
        "badges",
        "Artikelnummer",
        "BUP_Conversion",
        "BUP_UOM",
        "BUP_Value",
        "channel",
        "display",
        "grossPrice",
        "Hardheid",
        "Inwendige diameter",
        "Kleur",
        "listPrice",
        "Maat volgens AS568",
        "manufacturerImage",
        "manufacturerName",
        "Materiaal",
        "minQuantity",
        "name",
        "salePrice",
        "sku",
        "Snoerdikte",
        "stepQuantity",
        "Temperatuurgebied",
        "Toepassing",
        "uom",
      ],
    };
    expect(getOrganisedProducts(mockProducts)).toEqual(result);
  });
});
