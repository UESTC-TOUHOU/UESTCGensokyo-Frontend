import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* 页面内容将在这里渲染 */}
      </main>
      <Footer />
    </>
  );
}

export default Layout;