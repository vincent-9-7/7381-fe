import '../../assets/scss/color.scss';
import React from 'react';
import PostForm from '../../components/PostForm/PostForm';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';


function PostPage() {

  return (
    <div >
      <Header style={{background:"white"}}/>
      <PostForm />
      <Footer style={{background:"#FDF77A"}}/>
    </div>
  );
}

export default PostPage;

