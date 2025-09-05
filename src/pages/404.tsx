import { Helmet } from 'react-helmet-async';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | React Gameplay</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Return to React Gameplay to play classic games."
        />
      </Helmet>

      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>
            {(error as { statusText?: string })?.statusText ||
              (error as Error)?.message}
          </i>
        </p>
      </div>
    </>
  );
}
