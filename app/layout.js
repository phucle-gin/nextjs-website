import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cute+Font&family=Space+Mono&display=swap">
      </link>    
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
