import React from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import ItemTabs from '../../components/ItemDetail/ItemTabs';
import Footer from '../../components/PageFooter/PageFooter';
import Header from '../../components/PageHeader/PageHeader';
import SearchBar from '../../components/SearchBar/SearchBar';
import './ItemDetailPage.scss';

function ItemDetailPage() {
  return (
    <div>
      <Header />
      <SearchBar />
      <div className="container">
        <ItemDetail />

      </div>
      <ItemTabs />


      <Footer />
    </div>
  );
}

export default ItemDetailPage;
