import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cute+Font&family=Space+Mono&display=swap">
      </link>    
    </head>
    <body>
     <div className='overflow-hidden bg-primary-black'>
      {children}
      </div>
    </body>
  </html>
);

export default RootLayout;
