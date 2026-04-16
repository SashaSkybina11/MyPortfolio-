import css from "./Page.module.css";

const NotFound = () => {
  return (
    <div className={css.notFound}>
      <h1 className={css.titleError}>404 - Page not found</h1>
      <p className={css.descrError}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
