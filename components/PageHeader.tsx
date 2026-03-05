import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
}

const PageHeader = ({ title, breadcrumb }: PageHeaderProps) => {
  return (
    <div className="page-header bg-section dark-section parallaxie">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header-box">
              <h1 className="text-anime-style-3" data-cursor="-opaque">{title}</h1>
              <nav className="wow fadeInUp">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link href="/">home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">{breadcrumb}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
