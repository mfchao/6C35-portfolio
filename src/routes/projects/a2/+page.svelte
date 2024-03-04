<article id="6670cf73-03e3-4aa5-a274-872809e601f9" class="page sans">
  <header>
    <h1 class="page-title">
      <strong><strong>Exploratory Data Analysis</strong></strong>
    </h1>
    <p class="page-description"></p>
  </header>
  <div class="page-body">
    <h3 id="f72e7848-b5dc-4d32-a974-2eaf23ff95d7" class="">
      <em>Assignment 2</em>
    </h3>
    <p id="690cfcbf-5a20-4585-97b8-41737ce461e2" class="">
      <strong>Maggie Chao</strong> — <em>chaom@mit.edu</em>
    </p>
    <p id="c70bb413-f44c-4078-9349-3cfd47eb9868" class=""></p>
    <h2 id="87080141-fdef-4bcb-b08e-b4999aad837e" class="">Dataset Overview</h2>
    <p id="40bf4b2f-e013-4346-8def-377fd081a8f4" class="">
      This dataset contains statistics for a sample of 49301 U.S. residential
      addresses and their sales transactions in the City of Boston between
      2000-2023. The dataset contains various columns providing information
      related to real estate transactions. The &#x27;address&#x27; column holds
      23,769 unique residence addresses, while the &#x27;street&#x27; column
      contains 492 different street names and the &#x27;zip&#x27; column
      consists of 38 unique numeric zip codes. Property types are categorized
      under &#x27;proptype&#x27;, condensing use codes and usages into broader
      categories like apartment, condo, commercial, etc. Dates of transactions
      are recorded in the &#x27;date&#x27; column, with 5,659 unique entries.
      Other notable columns include &#x27;price&#x27;, indicating the sale
      amount, &#x27;yearbuilt&#x27; representing the original construction year,
      and &#x27;lotsize&#x27; denoting the size of the property in square feet.
      Various binary columns indicate whether the buyer or seller is a business
      entity, a trust, a bank, or a government entity. Information regarding
      flips, investor types, and ownership status is also provided. Overall, the
      dataset offers comprehensive insights into real estate transactions,
      including property details, financial aspects, and participant
      characteristics. This dataset is provided by <a
        href="https://www.mapc.org/aboutus/"
        >Metropolitan Area Planning Council (MAPC)</a
      >. I&#x27;m interested in this data because the various factors on housing
      price may allow us to gain more insights into real estate market trends,
      investment opportunities, and the behavior of buyers and sellers within
      the industry.
    </p>
    <p id="0e0163a3-b264-431b-a555-22a37a656326" class=""></p>
    <h2 id="75a39037-ba8e-48dc-818e-5c8ba0ba2061" class="">Questions</h2>
    <table id="f3db9ac7-30a5-4830-acf3-c35acdbaf30f" class="simple-table">
      <tbody
        ><tr id="8a627511-ee54-4c68-8fa2-fa079a2b93e2"
          ><td id="x@~g" class="" style="width:268px"
            ><strong>Question</strong></td
          ><td id=";[m\" class="" style="width:442px"
            ><strong>Motivation</strong></td
          ></tr
        ><tr id="dc42c28d-274f-491a-9aaa-8b36ca7d8dd0"
          ><td id="x@~g" class="" style="width:268px"
            >What is the overall trend in residential housing prices over the
            years? Are there any significant fluctuations or patterns?</td
          ><td id=";[m\" class="" style="width:442px"
            >Understanding the general trajectory of housing prices can provide
            insights into market stability, economic conditions, and potential
            investment opportunities. The reading from last week showed a rise
            in prices after COVID, and a decrease in recent years - I want to
            see if this is also the case in Boston.</td
          ></tr
        ><tr id="796baf9e-f8ff-4997-a22b-632912ad169f"
          ><td id="x@~g" class="" style="width:268px"
            >Are housing prices related to seasonal changes?
          </td><td id=";[m\" class="" style="width:442px"
            >As a student that wants to start renting in the fall, is that a
            high season for renting? Identifying seasonal trends can help
            sellers optimize listing times and buyers strategize their
            purchasing decisions.</td
          ></tr
        ><tr id="9899074b-06bd-46f9-95ce-28eb76b117fe"
          ><td id="x@~g" class="" style="width:268px"
            >Which areas have experienced the highest appreciation in housing
            prices over the years?</td
          ><td id=";[m\" class="" style="width:442px"
            >If I want to get a property close to my work and also downtown for
            a low price, if that possible? Recognizing areas with rapid
            appreciation can guide investors to target promising locations for
            future investment.</td
          ></tr
        ><tr id="87335280-b9b6-48e8-9086-6fca373e074d"
          ><td id="x@~g" class="" style="width:268px"
            >How much do the residential features affect the housing price?
          </td><td id=";[m\" class="" style="width:442px"
            >How do factors like the year built, number of bedrooms, size,
            style, and terms affect the price? Understanding this may give
            insights into what people find most desirable in a housing price.
            I’m interested to see if this aligns with my personal preferences.</td
          ></tr
        ></tbody
      >
    </table>
    <p id="bb83fe09-6152-42dd-b78a-27efb1c2d95c" class=""></p>
    <h2 id="e918a458-09e1-4d6c-bec2-25c7fcf5aa94" class="">
      <strong>Discoveries &amp; Insights</strong>
    </h2>
    <p id="9be920a9-7b29-498c-942d-27faf27d5561" class=""></p>
    <figure id="179afb00-0d1e-4687-92ea-fb6f44350275" class="image">
      <a
        href="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_2.25.11_pm.png"
        ><img
          style="width:2578px"
          src="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_2.25.11_pm.png"
        /></a
      >
    </figure>
    <p id="f3285a14-97e8-442e-9976-3d26abe17caf" class="">
      <strong
        >Figure 1: Overall Trend in Residential Housing Prices Over the Years</strong
      >
    </p>
    <p id="60e5f7ea-b753-4783-a509-c327bcb8c1cc" class="">
      The first step is to take a look at our data set. This chart shows the
      average housing prices for each year between 2000 and 2023. We observe an
      overall increase in housing prices until 2019, with a peak in 2017 and a
      sudden drop in 2008 and in 2018. The drop in 2008 was likely due to the
      2008 housing market crash, and the drop in 2018 was likely due to the
      interest rate volatility, sales being pulled forward in anticipation of
      higher rates in the future, and the continuous constraint in housing
      supply. Not enough data was collected for 2023 so the below analysis will
      be conducted from years 2000 to 2023.
    </p>
    <p id="2e7837ce-7811-49bd-b9e3-42ab27cb045e" class=""></p>
    <p id="69d6ee3a-cb9b-4f2e-9c95-36a3aa0a6ef4" class=""></p>
    <figure id="76acec73-cf3e-4858-b449-aa53859583c6" class="image">
      <a
        href="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_2.43.12_pm.png"
        ><img
          style="width:2432px"
          src="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_2.43.12_pm.png"
        /></a
      >
    </figure>
    <p id="4e79c591-de54-4338-b7fd-777938b83d75" class="">
      <strong>Figure 2: Percentage Change in Housing Prices Over Time</strong>
    </p>
    <p id="3b72e012-4bed-4de9-a53e-fe4b064ca8b0" class="">
      In this graph we plot the percentage change in housing prices over time. I
      calculated the percentage change between consecutive years by using this
      formula: ([Price] - LOOKUP([Price], -1)) / ABS(LOOKUP([Price], -1)). Based
      on this graph we can see that from 2001 to 2022, the housing market
      experienced fluctuating trends, with both positive and negative percentage
      changes observed. The years 2004, 2010, and 2017 stand out as periods of
      significant growth, with percentage changes of 1.4, 0.9, and 0.8,
      respectively. Conversely, the years 2008 and 2020 witnessed substantial
      declines, with percentage changes of -0.54 and -0.32, respectively,
      reflecting the impact of economic downturns such as the global financial
      crisis of 2008 and the COVID-19 pandemic in 2020. Despite occasional
      downturns, the overall trend indicates a gradual increase in housing
      prices, with relatively stable growth observed in recent years.
    </p>
    <p id="092caee1-4a42-4650-b360-463c8a0c08e1" class=""></p>
    <p id="60d70dd9-a7ce-4120-9b1d-19ab102195c5" class=""></p>
    <figure id="1ab7243e-f2b7-46e2-9a2f-460b90546773" class="image">
      <a
        href="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_2.52.34_pm.png"
        ><img
          style="width:2572px"
          src="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_2.52.34_pm.png"
        /></a
      >
    </figure>
    <figure id="ef291af3-4a2b-4f39-afe9-6fa42186abdb" class="image">
      <a
        href="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_2.52.46_pm.png"
        ><img
          style="width:2560px"
          src="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_2.52.46_pm.png"
        /></a
      >
    </figure>
    <p id="ed434929-d0a6-4a90-b391-b2f051851ce2" class="">
      <strong>Figures 3 &amp; 4: Seasonal Changes in Housing Prices</strong>
    </p>
    <p id="87460790-aefc-4a00-8c26-9df68bc1afb8" class="">
      Now that we have an idea of what the data looks like, we can answer the
      first question: does housing prices change based on season? Generally,
      housing prices exhibit fluctuating trends across quarters, with certain
      quarters experiencing higher prices compared to others. While the second
      quarter of 2017 notably stands out with a considerable spike in housing
      prices, reaching 4,638,715,248.00, I excluded this anomaly from the
      analysis due to its significant deviation from the overall trend.
      Excluding this spike, the analysis still demonstrates fluctuating patterns
      across quarters, with some quarters exhibiting higher price averages than
      others. For instance, the fourth quarter of 2019 recorded the highest
      average price of 2,250,501,456.00, followed by the third quarter of 2019
      and the fourth quarter of 2021. Conversely, the first quarter of 2003
      reported the lowest average price, indicating potential seasonal
      variations in housing market dynamics. Based on the data provided, it is
      evident that housing prices do exhibit variation based on the season.
      Across different quarters from 2000 to 2022, we observe fluctuating trends
      in housing prices, with certain quarters consistently reporting higher
      average prices compared to others. For example, the fourth quarter of 2019
      recorded the highest average price, followed by the third quarter of 2019
      and the fourth quarter of 2021. Conversely, the first quarter of 2003
      reported the lowest average price. Therefore, it is reasonable to conclude
      that housing prices change based on the season, with certain quarters
      exhibiting higher or lower prices compared to others.
    </p>
    <p id="129a6444-d459-4af8-b477-96def8587308" class=""></p>
    <p id="39bc3de3-b4eb-4062-a3ec-4c3f9cdf72c0" class=""></p>
    <figure id="bdae7eec-d9d7-4384-b272-c8d9f2c2f84f" class="image">
      <a
        href="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_3.30.54_pm.png"
        ><img
          style="width:2458px"
          src="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_3.30.54_pm.png"
        /></a
      >
    </figure>
    <figure id="e9f5376f-b02c-4404-9bfe-56e275a55cdf" class="image">
      <a
        href="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_3.32.28_pm.png"
        ><img
          style="width:2430px"
          src="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_3.32.28_pm.png"
        /></a
      >
    </figure>
    <figure id="a36e98cf-73b2-41c1-9f52-29a53bf14ab0" class="image">
      <a
        href="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_3.33.26_pm.png"
        ><img
          style="width:2416px"
          src="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_3.33.26_pm.png"
        /></a
      >
    </figure>
    <p id="032aaa31-9260-4d1a-81ea-521144f25c15" class="">
      <strong
        >Figures 5-7: Comparison of Housing Prices by Property Type and Style</strong
      >
    </p>
    <p id="6981a4c0-034b-4e2b-af8f-7cd6241ba575" class="">
      The graphs about show some insights about the housing prices in relation
      to property type and style. The graphs progressively zoom in for better
      visibility of each category. The comparison of housing prices by property
      type and style reveals interesting insights into the real estate market.
      Notably, there are significant variations in prices across different
      property types and styles. For instance, the highest average prices are
      observed for certain styles such as ROW-MIDDLE and HIGH-RISE across
      various property types, indicating premium pricing for these architectural
      styles. Additionally, CONDO/APT emerges as the dominant property type with
      consistently high prices across different styles, suggesting a strong
      demand for condominiums and apartments in the market. Conversely, certain
      styles like LOW-RISE and RAISED CAPE exhibit lower average prices,
      indicating potentially more affordable housing options within these
      categories. These findings underscore the importance of architectural
      style and property type in influencing housing prices, providing valuable
      insights for both buyers and sellers in the real estate market.
    </p>
    <p id="1fcea598-f6be-46c7-9353-52b63b61af49" class=""></p>
    <p id="ca54e924-53bf-4d6c-89e8-9a54881c5778" class=""></p>
    <figure id="0aecef95-c55b-47f1-b95a-d8b5e8569faf" class="image">
      <a
        href="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_3.58.34_pm.png"
        ><img
          style="width:2576px"
          src="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_3.58.34_pm.png"
        /></a
      >
    </figure>
    <p id="f70d12a8-0b7d-4a21-9717-fd7239fa4afe" class="">
      <strong
        >Figure 8: Average Housing Prices by Zip code and Lot Size
      </strong>
    </p>
    <p id="526fbb73-fda9-4b53-bad6-08f99ff71d36" class="">
      Moving on, the analysis of average housing prices by zip code and lot size
      provides valuable insights into the real estate market across different
      geographical areas. There is noticeable variability in both average lot
      sizes and prices across different zip codes. Zip codes such as 02205 and
      02199 exhibit significantly larger average lot sizes and higher average
      prices, indicating potentially affluent neighborhoods with spacious
      properties. Conversely, zip codes like 02136 and 02121 show smaller
      average lot sizes and relatively lower average prices, suggesting more
      compact urban environments with potentially more affordable housing
      options. Interestingly, some zip codes such as 02128 and 02127 display a
      wide range of lot sizes, indicating diverse housing options within these
      areas. Overall, this analysis highlights the importance of considering
      both geographical location and lot size when assessing housing prices in
      the real estate market, as well as the correlation between lot size,
      location, and housing price.
    </p>
    <p id="1c50edea-5cb6-4547-a2eb-fe5d67deb74a" class=""></p>
    <p id="136a37d6-cf1d-4a97-ad88-ffbfc432b164" class=""></p>
    <figure id="9af975b3-d77b-4b35-add0-4f1651c22d8e" class="image">
      <a
        href="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_4.16.25_pm.png"
        ><img
          style="width:2544px"
          src="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_4.16.25_pm.png"
        /></a
      >
    </figure>
    <figure id="acfe81d5-420d-4292-898d-92d6cf570d59" class="image">
      <a
        href="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_4.18.35_pm.png"
        ><img
          style="width:2558px"
          src="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_4.18.35_pm.png"
        /></a
      >
    </figure>
    <figure id="a254c74d-a01d-44b7-b602-39558fe42e3c" class="image">
      <a
        href="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_4.22.16_pm.png"
        ><img
          style="width:2596px"
          src="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_4.22.16_pm.png"
        /></a
      >
    </figure>
    <p id="5d761af3-8fe5-4bae-8258-443182095080" class="">
      <strong
        >Figures 9 - 11: Average Prices Based on Bedrooms and Bathrooms
      </strong>
    </p>
    <p id="31bb5dd6-9fab-47e1-a679-b6c9fe5f83d1" class="">
      Next, I investigated how the property features might influence the housing
      price. I excluded 14 bathrooms and 0 bathrooms data points since they seem
      to not make much sense. Also excluded 7 bathrooms and 0 bedrooms data
      point. Overall, the data reveals varying combinations of bedrooms and
      bathrooms alongside their corresponding average prices. For instance,
      properties with 12 bedrooms and 11 bathrooms boast the highest average
      price at $12,736,000, while those with fewer bedrooms and bathrooms
      generally exhibit lower average prices. The dataset showcases how
      different configurations of bedrooms and bathrooms correlate with the
      average price of residential properties, providing insights into the
      preferences and market dynamics of real estate buyers. When adding the
      coloring based on interior square footage, you can see that it logically
      makes sense where the properties that have the most bedrooms and bathrooms
      are the largest in interior square footage, and they are also the most
      expensive.
    </p>
    <p id="737c4a43-13c9-4d4f-86f1-cdf0a2a03b6a" class=""></p>
    <p id="ea97a419-bcd0-44eb-a1ac-992b226ec164" class=""></p>
    <figure id="11c9de1a-7c35-4c10-b551-fcca4eddc6b1" class="image">
      <a
        href="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_4.36.57_pm.png"
        ><img
          style="width:2154px"
          src="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_4.36.57_pm.png"
        /></a
      >
    </figure>
    <figure id="06c933e9-0262-4f90-beca-ce419843e044" class="image">
      <a
        href="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_4.37.17_pm.png"
        ><img
          style="width:1110px"
          src="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_4.37.17_pm.png"
        /></a
      >
    </figure>
    <p id="b92d6c1d-5197-49b3-868b-37487eca92d0" class="">
      <strong
        >Figure 12 &amp; 13: Investor Type and Current Ownership on Housing
        Prices</strong
      >
    </p>
    <p id="d6f3c2a4-63e4-447d-a9fd-e18b5c1adeb3" class="">
      After getting rid of some outliers, the analysis of housing prices based
      on investor type reveals interesting patterns. Small investors, whether
      purchasing or selling properties, tend to achieve the highest average
      prices compared to other investor types, with an average price of
      $1,805,320.25 for purchases and $1,854,613.73 for sales. Non-investors, on
      the other hand, maintain relatively stable average prices across both
      purchase and sale transactions, with values around $873,008.32 for
      purchases and $751,229.26 for sales. Interestingly, medium-sized investors
      exhibit a substantial increase in average prices when purchasing
      properties compared to when selling, indicating a potential strategy for
      profit generation through investment. Large and institutional investors
      generally achieve lower average prices compared to smaller counterparts,
      suggesting different investment goals or market strategies. Overall, these
      results highlight the diverse dynamics of the housing market influenced by
      investor types, with smaller investors showing significant variation in
      pricing strategies compared to larger institutional players.
    </p>
    <p id="b85d49cf-ca6a-44fe-a088-208e385d9835" class=""></p>
    <p id="aa25920b-db2d-4ccd-b87d-317b701d9eaa" class=""></p>
    <figure id="c482045e-cc16-431a-a467-a9150a42b140" class="image">
      <a
        href="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_4.56.40_pm.png"
        ><img
          style="width:2164px"
          src="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_4.56.40_pm.png"
        /></a
      >
    </figure>
    <figure id="039d1932-f14a-4ad2-ae54-8eefd1d42e98" class="image">
      <a
        href="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_5.02.37_pm.png"
        ><img
          style="width:2158px"
          src="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_5.02.37_pm.png"
        /></a
      >
    </figure>
    <p id="d0236fb2-f783-4092-a3e7-c5eb2c0e6583" class="">
      <strong
        >Figure 14 &amp; 15: Housing Rates Based on Location and Year Built</strong
      >
    </p>
    <p id="0e8850f9-b054-4ffd-8ad8-5fada98c34ce" class="">
      Next we can investigate whether the location and year built influences the
      housing price, mapping only the data points with year info between
      2000-2023 and excluding price outliers. By utilizing longitude and
      latitude coordinates, we can plot data points on maps to reveal spatial
      patterns, identify clusters, and understand geographic distributions. From
      our map we can see that there is no clear correlation to housing price and
      year built, as there seems to be a mix of all prices for each year built.
      This maybe because year built does not directly influence the quality of
      the property since it doesn’t consider renovations or other variables that
      are important to the housing price. Thus, this suggests that there may be
      other more important factors.
    </p>
    <p id="7db0dbc3-2807-4424-8e8a-2853021e1af6" class=""></p>
    <p id="6fa5e44e-70b9-42c3-bee4-905d2b543ad0" class=""></p>
    <figure id="0b3b1dd0-50cf-45b7-8b79-430911c10a0b" class="image">
      <a
        href="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_5.05.59_pm.png"
        ><img
          style="width:2164px"
          src="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_5.05.59_pm.png"
        /></a
      >
    </figure>
    <figure id="053c1583-461c-4644-9e4b-4b738e10d4ed" class="image">
      <a
        href="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_5.07.31_pm.png"
        ><img
          style="width:2160px"
          src="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_5.07.31_pm.png"
        /></a
      >
    </figure>
    <figure id="920eeb10-423c-4b00-bf8c-d564e785a000" class="image">
      <a
        href="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_5.07.54_pm.png"
        ><img
          style="width:2158px"
          src="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_5.07.54_pm.png"
        /></a
      >
    </figure>
    <figure id="323469a7-917a-4cd8-86cf-a73a4746626e" class="image">
      <a
        href="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_5.10.16_pm.png"
        ><img
          style="width:2160px"
          src="../images/Exploratory%20Data%20Analysis%206670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_5.10.16_pm.png"
        /></a
      >
    </figure>
    <p id="e0bb3a48-b3c8-469f-978f-16d304746678" class="">
      <strong
        >Figures 16 -19: Housing Rates based on Location and Other Factors</strong
      >
    </p>
    <p id="5300d5ab-d08a-4562-b459-2d52cada10c5" class="">
      After manipulating the data more, it is clear that the housing. price is
      more dependent on factors such as lot size, total rooms, number of
      bedrooms, and internal square footage. It is interesting that these
      factors influence the price of the housing more than the year that it was
      built. It is also clear in the location that areas located more near the
      city center, or downtown area, are higher priced. However, there are also
      some highly priced residential areas in some areas outside of the city
      center, suggesting that these locations may be more suited for suburban
      lifestyles and families, or are close to universities or other
      attractions.
    </p>
    <p id="486b56d5-0ff9-4507-b245-968938ae0716" class=""></p>
    <h2 id="cb7f511d-0906-41b7-a648-73aad005d893" class="">Summary</h2>
    <p id="37f208cb-5968-4d8b-a141-b8f0eb4ae8a4" class="">
      In analyzing residential housing prices from 2000 to 2023, several key
      insights emerged. Despite fluctuations driven by events like the 2008
      housing market crash and the COVID-19 pandemic in 2020, the overall trend
      showed a gradual increase, indicating market resilience. Seasonal
      variations were evident, with certain quarters consistently reporting
      higher average prices, highlighting the influence of timing on real estate
      values. Factors such as style, property type, geographical location, lot
      size, and property features all played significant roles in determining
      housing prices. For example, certain styles commanded premium prices,
      while properties with more bedrooms and bathrooms tended to be larger and
      more expensive. Additionally, the analysis of investor types revealed
      diverse dynamics, with smaller investors showing significant variation in
      pricing strategies compared to larger institutional players. While the
      year built showed no clear correlation with housing prices, factors such
      as lot size, total rooms, number of bedrooms, and internal square footage
      emerged as more influential determinants, suggesting that property quality
      and features outweigh the influence of the year built on housing prices.
      Overall, the comprehensive analysis provided valuable insights for both
      buyers and sellers, emphasizing the multifaceted nature of housing prices
      and the importance of considering various factors when assessing property
      values.
    </p>
    <p id="4c27c07b-d22c-438b-96db-99fbe19ae09c" class=""></p>
  </div>
</article>
<span class="sans" style="font-size:14px;padding-top:2em"></span>

<style>
  /* cspell:disable-file */
  /* webkit printing magic: print all background colors */
  html {
    -webkit-print-color-adjust: exact;
  }
  * {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
  }

  body {
    font: 100%/1.5 system-ui;
  }

  article {
    margin-top: 20px;
  }

  img {
    width: 200px;
  }

  .currentPage {
    color: rgb(255, 0, 0) !important;
  }

  .menu {
    display: flex;
    align-items: center;
  }

  nav a {
    color: black;
    text-decoration: none;
    margin-left: 10px;
  }

  nav ul {
    list-style-type: none;
    margin-left: auto;
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    background-color: white;
    z-index: 1000;
  }

  h1 {
    margin-top: 3em;
  }

  .class-name {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2.5em;
  }

  .menu {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2.5em;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }
  @media only screen {
    body {
      margin: 2em auto;
      max-width: 900px;
      color: rgb(55, 53, 47);
    }
  }

  body :not(nav) {
    line-height: 1.5;
    white-space: pre-wrap;
  }

  a,
  a.visited {
    color: inherit;
    text-decoration: underline;
  }

  .pdf-relative-link-path {
    font-size: 80%;
    color: #444;
  }

  h2,
  h3 {
    letter-spacing: -0.01em;
    line-height: 1.2;
    font-weight: 600;
    margin-bottom: 0;
  }

  .page-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
    margin-top: 1.25rem;
  }

  .source {
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 1.5em;
    word-break: break-all;
  }

  .callout {
    border-radius: 3px;
    padding: 1rem;
  }

  figure {
    margin: 1.25em 0;
    page-break-inside: avoid;
  }

  figcaption {
    opacity: 0.5;
    font-size: 85%;
    margin-top: 0.5em;
  }

  mark {
    background-color: transparent;
  }

  .indented {
    padding-left: 1.5em;
  }

  hr {
    background: transparent;
    display: block;
    width: 100%;
    height: 1px;
    visibility: visible;
    border: none;
    border-bottom: 1px solid rgba(55, 53, 47, 0.09);
  }

  img {
    max-width: 100%;
  }

  @media only print {
    img {
      max-height: 100vh;
      object-fit: contain;
    }
  }

  @page {
    margin: 1in;
  }

  .collection-content {
    font-size: 0.875rem;
  }

  .column-list {
    display: flex;
    justify-content: space-between;
  }

  .column {
    padding: 0 1em;
  }

  .column:first-child {
    padding-left: 0;
  }

  .column:last-child {
    padding-right: 0;
  }

  .table_of_contents-item {
    display: block;
    font-size: 0.875rem;
    line-height: 1.3;
    padding: 0.125rem;
  }

  .table_of_contents-indent-1 {
    margin-left: 1.5rem;
  }

  .table_of_contents-indent-2 {
    margin-left: 3rem;
  }

  .table_of_contents-indent-3 {
    margin-left: 4.5rem;
  }

  .table_of_contents-link {
    text-decoration: none;
    opacity: 0.7;
    border-bottom: 1px solid rgba(55, 53, 47, 0.18);
  }

  table,
  th,
  td {
    border: 1px solid rgba(55, 53, 47, 0.09);
    border-collapse: collapse;
  }

  table {
    border-left: none;
    border-right: none;
  }

  th,
  td {
    font-weight: normal;
    padding: 0.25em 0.5em;
    line-height: 1.5;
    min-height: 1.5em;
    text-align: left;
  }

  th {
    color: rgba(55, 53, 47, 0.6);
  }

  ol,
  ul {
    margin: 0;
    margin-block-start: 0.6em;
    margin-block-end: 0.6em;
  }

  li > ol:first-child,
  li > ul:first-child {
    margin-block-start: 0.6em;
  }

  ul > li {
    list-style: disc;
  }

  ul.to-do-list {
    padding-inline-start: 0;
  }

  ul.to-do-list > li {
    list-style: none;
  }

  .to-do-children-checked {
    text-decoration: line-through;
    opacity: 0.375;
  }

  ul.toggle > li {
    list-style: none;
  }

  ul {
    padding-inline-start: 1.7em;
  }

  ul > li {
    padding-left: 0.1em;
  }

  ol {
    padding-inline-start: 1.6em;
  }

  ol > li {
    padding-left: 0.2em;
  }

  .mono ol {
    padding-inline-start: 2em;
  }

  .mono ol > li {
    text-indent: -0.4em;
  }

  .toggle {
    padding-inline-start: 0em;
    list-style-type: none;
  }

  /* Indent toggle children */
  .toggle > li > details {
    padding-left: 1.7em;
  }

  .toggle > li > details > summary {
    margin-left: -1.1em;
  }

  .selected-value {
    display: inline-block;
    padding: 0 0.5em;
    background: rgba(206, 205, 202, 0.5);
    border-radius: 3px;
    margin-right: 0.5em;
    margin-top: 0.3em;
    margin-bottom: 0.3em;
    white-space: nowrap;
  }

  .collection-title {
    display: inline-block;
    margin-right: 1em;
  }

  .page-description {
    margin-bottom: 2em;
  }

  .simple-table {
    margin-top: 1em;
    font-size: 0.875rem;
    empty-cells: show;
  }
  .simple-table td {
    height: 29px;
    min-width: 120px;
  }

  .simple-table th {
    height: 29px;
    min-width: 120px;
  }

  .simple-table-header-color {
    background: rgb(247, 246, 243);
    color: black;
  }
  .simple-table-header {
    font-weight: 500;
  }

  time {
    opacity: 0.5;
  }

  .icon {
    display: inline-block;
    max-width: 1.2em;
    max-height: 1.2em;
    text-decoration: none;
    vertical-align: text-bottom;
    margin-right: 0.5em;
  }

  img.icon {
    border-radius: 3px;
  }

  .user-icon {
    width: 1.5em;
    height: 1.5em;
    border-radius: 100%;
    margin-right: 0.5rem;
  }

  .user-icon-inner {
    font-size: 0.8em;
  }

  .text-icon {
    border: 1px solid #000;
    text-align: center;
  }

  .page-cover-image {
    display: block;
    object-fit: cover;
    width: 100%;
    max-height: 30vh;
  }

  .page-header-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .page-header-icon-with-cover {
    margin-top: -0.72em;
    margin-left: 0.07em;
  }

  .page-header-icon img {
    border-radius: 3px;
  }

  .link-to-page {
    margin: 1em 0;
    padding: 0;
    border: none;
    font-weight: 500;
  }

  p > .user {
    opacity: 0.5;
  }

  td > .user,
  td > time {
    white-space: nowrap;
  }

  input[type="checkbox"] {
    transform: scale(1.5);
    margin-right: 0.6em;
    vertical-align: middle;
  }

  p {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  .image {
    border: none;
    margin: 1.5em 0;
    padding: 0;
    border-radius: 0;
    text-align: center;
  }

  .code,
  code {
    background: rgba(135, 131, 120, 0.15);
    border-radius: 3px;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 85%;
    tab-size: 2;
  }

  code {
    color: #eb5757;
  }

  .code {
    padding: 1.5em 1em;
  }

  .code-wrap {
    white-space: pre-wrap;
    word-break: break-all;
  }

  .code > code {
    background: none;
    padding: 0;
    font-size: 100%;
    color: inherit;
  }

  blockquote {
    font-size: 1.25em;
    margin: 1em 0;
    padding-left: 1em;
    border-left: 3px solid rgb(55, 53, 47);
  }

  .bookmark {
    text-decoration: none;
    max-height: 8em;
    padding: 0;
    display: flex;
    width: 100%;
    align-items: stretch;
  }

  .bookmark-title {
    font-size: 0.85em;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 1.75em;
    white-space: nowrap;
  }

  .bookmark-text {
    display: flex;
    flex-direction: column;
  }

  .bookmark-info {
    flex: 4 1 180px;
    padding: 12px 14px 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .bookmark-image {
    width: 33%;
    flex: 1 1 180px;
    display: block;
    position: relative;
    object-fit: cover;
    border-radius: 1px;
  }

  .bookmark-description {
    color: rgba(55, 53, 47, 0.6);
    font-size: 0.75em;
    overflow: hidden;
    max-height: 4.5em;
    word-break: break-word;
  }

  .bookmark-href {
    font-size: 0.75em;
    margin-top: 0.25em;
  }

  .sans {
    font-family:
      ui-sans-serif,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Helvetica,
      "Apple Color Emoji",
      Arial,
      sans-serif,
      "Segoe UI Emoji",
      "Segoe UI Symbol";
  }
  .code {
    font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono",
      Courier, monospace;
  }
  .serif {
    font-family: Lyon-Text, Georgia, ui-serif, serif;
  }
  .mono {
    font-family: iawriter-mono, Nitti, Menlo, Courier, monospace;
  }
  .pdf .sans {
    font-family:
      Inter,
      ui-sans-serif,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Helvetica,
      "Apple Color Emoji",
      Arial,
      sans-serif,
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Twemoji",
      "Noto Color Emoji",
      "Noto Sans CJK JP";
  }
  .pdf:lang(zh-CN) .sans {
    font-family:
      Inter,
      ui-sans-serif,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Helvetica,
      "Apple Color Emoji",
      Arial,
      sans-serif,
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Twemoji",
      "Noto Color Emoji",
      "Noto Sans CJK SC";
  }
  .pdf:lang(zh-TW) .sans {
    font-family:
      Inter,
      ui-sans-serif,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Helvetica,
      "Apple Color Emoji",
      Arial,
      sans-serif,
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Twemoji",
      "Noto Color Emoji",
      "Noto Sans CJK TC";
  }
  .pdf:lang(ko-KR) .sans {
    font-family:
      Inter,
      ui-sans-serif,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Helvetica,
      "Apple Color Emoji",
      Arial,
      sans-serif,
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Twemoji",
      "Noto Color Emoji",
      "Noto Sans CJK KR";
  }
  .pdf .code {
    font-family:
      Source Code Pro,
      "SFMono-Regular",
      Menlo,
      Consolas,
      "PT Mono",
      "Liberation Mono",
      Courier,
      monospace,
      "Twemoji",
      "Noto Color Emoji",
      "Noto Sans Mono CJK JP";
  }
  .pdf:lang(zh-CN) .code {
    font-family:
      Source Code Pro,
      "SFMono-Regular",
      Menlo,
      Consolas,
      "PT Mono",
      "Liberation Mono",
      Courier,
      monospace,
      "Twemoji",
      "Noto Color Emoji",
      "Noto Sans Mono CJK SC";
  }
  .pdf:lang(zh-TW) .code {
    font-family:
      Source Code Pro,
      "SFMono-Regular",
      Menlo,
      Consolas,
      "PT Mono",
      "Liberation Mono",
      Courier,
      monospace,
      "Twemoji",
      "Noto Color Emoji",
      "Noto Sans Mono CJK TC";
  }
  .pdf:lang(ko-KR) .code {
    font-family:
      Source Code Pro,
      "SFMono-Regular",
      Menlo,
      Consolas,
      "PT Mono",
      "Liberation Mono",
      Courier,
      monospace,
      "Twemoji",
      "Noto Color Emoji",
      "Noto Sans Mono CJK KR";
  }
  .pdf .serif {
    font-family:
      PT Serif,
      Lyon-Text,
      Georgia,
      ui-serif,
      serif,
      "Twemoji",
      "Noto Color Emoji",
      "Noto Serif CJK JP";
  }
  .pdf:lang(zh-CN) .serif {
    font-family:
      PT Serif,
      Lyon-Text,
      Georgia,
      ui-serif,
      serif,
      "Twemoji",
      "Noto Color Emoji",
      "Noto Serif CJK SC";
  }
  .pdf:lang(zh-TW) .serif {
    font-family:
      PT Serif,
      Lyon-Text,
      Georgia,
      ui-serif,
      serif,
      "Twemoji",
      "Noto Color Emoji",
      "Noto Serif CJK TC";
  }
  .pdf:lang(ko-KR) .serif {
    font-family:
      PT Serif,
      Lyon-Text,
      Georgia,
      ui-serif,
      serif,
      "Twemoji",
      "Noto Color Emoji",
      "Noto Serif CJK KR";
  }
  .pdf .mono {
    font-family:
      PT Mono,
      iawriter-mono,
      Nitti,
      Menlo,
      Courier,
      monospace,
      "Twemoji",
      "Noto Color Emoji",
      "Noto Sans Mono CJK JP";
  }
  .pdf:lang(zh-CN) .mono {
    font-family:
      PT Mono,
      iawriter-mono,
      Nitti,
      Menlo,
      Courier,
      monospace,
      "Twemoji",
      "Noto Color Emoji",
      "Noto Sans Mono CJK SC";
  }
  .pdf:lang(zh-TW) .mono {
    font-family:
      PT Mono,
      iawriter-mono,
      Nitti,
      Menlo,
      Courier,
      monospace,
      "Twemoji",
      "Noto Color Emoji",
      "Noto Sans Mono CJK TC";
  }
  .pdf:lang(ko-KR) .mono {
    font-family:
      PT Mono,
      iawriter-mono,
      Nitti,
      Menlo,
      Courier,
      monospace,
      "Twemoji",
      "Noto Color Emoji",
      "Noto Sans Mono CJK KR";
  }
  .highlight-default {
    color: rgba(55, 53, 47, 1);
  }
  .highlight-gray {
    color: rgba(120, 119, 116, 1);
    fill: rgba(120, 119, 116, 1);
  }
  .highlight-brown {
    color: rgba(159, 107, 83, 1);
    fill: rgba(159, 107, 83, 1);
  }
  .highlight-orange {
    color: rgba(217, 115, 13, 1);
    fill: rgba(217, 115, 13, 1);
  }
  .highlight-yellow {
    color: rgba(203, 145, 47, 1);
    fill: rgba(203, 145, 47, 1);
  }
  .highlight-teal {
    color: rgba(68, 131, 97, 1);
    fill: rgba(68, 131, 97, 1);
  }
  .highlight-blue {
    color: rgba(51, 126, 169, 1);
    fill: rgba(51, 126, 169, 1);
  }
  .highlight-purple {
    color: rgba(144, 101, 176, 1);
    fill: rgba(144, 101, 176, 1);
  }
  .highlight-pink {
    color: rgba(193, 76, 138, 1);
    fill: rgba(193, 76, 138, 1);
  }
  .highlight-red {
    color: rgba(212, 76, 71, 1);
    fill: rgba(212, 76, 71, 1);
  }
  .highlight-gray_background {
    background: rgba(241, 241, 239, 1);
  }
  .highlight-brown_background {
    background: rgba(244, 238, 238, 1);
  }
  .highlight-orange_background {
    background: rgba(251, 236, 221, 1);
  }
  .highlight-yellow_background {
    background: rgba(251, 243, 219, 1);
  }
  .highlight-teal_background {
    background: rgba(237, 243, 236, 1);
  }
  .highlight-blue_background {
    background: rgba(231, 243, 248, 1);
  }
  .highlight-purple_background {
    background: rgba(244, 240, 247, 0.8);
  }
  .highlight-pink_background {
    background: rgba(249, 238, 243, 0.8);
  }
  .highlight-red_background {
    background: rgba(253, 235, 236, 1);
  }
  .block-color-default {
    color: inherit;
    fill: inherit;
  }
  .block-color-gray {
    color: rgba(120, 119, 116, 1);
    fill: rgba(120, 119, 116, 1);
  }
  .block-color-brown {
    color: rgba(159, 107, 83, 1);
    fill: rgba(159, 107, 83, 1);
  }
  .block-color-orange {
    color: rgba(217, 115, 13, 1);
    fill: rgba(217, 115, 13, 1);
  }
  .block-color-yellow {
    color: rgba(203, 145, 47, 1);
    fill: rgba(203, 145, 47, 1);
  }
  .block-color-teal {
    color: rgba(68, 131, 97, 1);
    fill: rgba(68, 131, 97, 1);
  }
  .block-color-blue {
    color: rgba(51, 126, 169, 1);
    fill: rgba(51, 126, 169, 1);
  }
  .block-color-purple {
    color: rgba(144, 101, 176, 1);
    fill: rgba(144, 101, 176, 1);
  }
  .block-color-pink {
    color: rgba(193, 76, 138, 1);
    fill: rgba(193, 76, 138, 1);
  }
  .block-color-red {
    color: rgba(212, 76, 71, 1);
    fill: rgba(212, 76, 71, 1);
  }
  .block-color-gray_background {
    background: rgba(241, 241, 239, 1);
  }
  .block-color-brown_background {
    background: rgba(244, 238, 238, 1);
  }
  .block-color-orange_background {
    background: rgba(251, 236, 221, 1);
  }
  .block-color-yellow_background {
    background: rgba(251, 243, 219, 1);
  }
  .block-color-teal_background {
    background: rgba(237, 243, 236, 1);
  }
  .block-color-blue_background {
    background: rgba(231, 243, 248, 1);
  }
  .block-color-purple_background {
    background: rgba(244, 240, 247, 0.8);
  }
  .block-color-pink_background {
    background: rgba(249, 238, 243, 0.8);
  }
  .block-color-red_background {
    background: rgba(253, 235, 236, 1);
  }
  .select-value-color-uiBlue {
    background-color: rgba(35, 131, 226, 0.07);
  }
  .select-value-color-pink {
    background-color: rgba(245, 224, 233, 1);
  }
  .select-value-color-purple {
    background-color: rgba(232, 222, 238, 1);
  }
  .select-value-color-green {
    background-color: rgba(219, 237, 219, 1);
  }
  .select-value-color-gray {
    background-color: rgba(227, 226, 224, 1);
  }
  .select-value-color-translucentGray {
    background-color: rgba(255, 255, 255, 0.0375);
  }
  .select-value-color-orange {
    background-color: rgba(250, 222, 201, 1);
  }
  .select-value-color-brown {
    background-color: rgba(238, 224, 218, 1);
  }
  .select-value-color-red {
    background-color: rgba(255, 226, 221, 1);
  }
  .select-value-color-yellow {
    background-color: rgba(253, 236, 200, 1);
  }
  .select-value-color-blue {
    background-color: rgba(211, 229, 239, 1);
  }
  .select-value-color-pageGlass {
    background-color: undefined;
  }
  .select-value-color-washGlass {
    background-color: undefined;
  }

  .checkbox {
    display: inline-flex;
    vertical-align: text-bottom;
    width: 16;
    height: 16;
    background-size: 16px;
    margin-left: 2px;
    margin-right: 5px;
  }

  .checkbox-on {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
  }

  .checkbox-off {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
  }
</style>
