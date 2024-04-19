import { useRouteError } from 'react-router-dom';

{/** This error page will populate if unexpected error occurs */}
function Error() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="error-page">
        <h1>Whoops!</h1>
        <p>Better try again! An unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
}

export default Error;