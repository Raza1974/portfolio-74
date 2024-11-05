import Link from 'next/link';


export default function Portfolio() {
  return (
    <div>
      {/* Use a proper heading tag instead of div with level="1" */}
      <h1 className="title themed-heading" data-placeholder="Untitled" data-node-view-content="" style={{ whiteSpace: 'pre-wrap', minWidth: 'min(100%, 10em)' }}>
        <div data-node-view-content-inner="title" style={{ whiteSpace: 'inherit' }}>
          Syed Mohammad Raza Rizvi
        </div>
      </h1>
      <Link href="/" className="logo">
            <img src="/image/portfolio 2.jpg"
             alt="Logo"
             width="700px"
             height="auto"
              />
          </Link>
      <div style={{ background : 'yellow', color: 'red', margin: '10px' }}>Syed Mohammad Raza Rizvi</div> 
    </div>
  );
}
