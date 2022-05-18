import logo from './logo.svg';
import './App.scss';
import Layout from './Components/Layout';
import OfferBanner from './Components/Banner/Offer/OfferBanner';
import HeroBanner from './Components/Banner/Hero/HeroBanner';

import './scss/_index.scss';
import FeatureBanner from './Components/Banner/Feature/FeatureBanner';
import ProductList from './Components/Products/ProductList';

import { popularProducts, topRatedProducts, tiles } from './data/products'
import Teaser from './Components/Teaser';
import SubscriptionForm from './Components/SubscriptionForm';
import ServiceList from './Components/ServiceList';
import ImageTilesList from './Components/ImageTIlesList';

function App() {
  return (
    <>
      <OfferBanner />
      <div className='App'>
        <Layout>
          <HeroBanner />
          <FeatureBanner />

          <ProductList
            category="Most Popular"
            products={popularProducts}
          />

          <Teaser
            title="Clean products that deliver better solutions"
            description="A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best"
            image="man-in-blue-top-2830332@3x"
            modifier="green"
            buttonClass="light"
          />

          <ProductList
            category="Top Rated"
            products={topRatedProducts}
          />

          <Teaser
            title="All Natural Ingredients."
            description="A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best"
            image="sincerely-media-CjHJbp3zInA-unsplash@2x"
            modifier="pink"
            buttonClass="brown"
          />

          <ProductList
            category="Recommended"
            products={popularProducts}
          />

          <ImageTilesList tiles={tiles} />

          <ServiceList />

          <SubscriptionForm />
        </Layout>
      </div>

    </>
  );
}

export default App;
