import React from 'react';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';
import './Profile.scss';
import ProfileContent from '../../components/ProfileContent/Profile';

function ProfilePage() {
  return (
    <div>
      <Header />
      <div style={{ minHeight: '90vh' }}>
        <ProfileContent />
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
