import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="reimu-cursor">
      <Header />
      <main>
        <Outlet /> {/* 页面内容将在这里渲染 */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;