import Router from "next/router";

const Index = () => null;

Index.getInitialProps = (ctx) => {
  process.browser
    ? Router.replace("/admin/articles", "/admin/articles") //Redirec from Client Side
    : ctx.res.writeHead(302, { Location: "/admin/articles" }).end(); //Redirec from Server Side
};

export default Index;
