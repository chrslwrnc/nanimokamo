export const createScripts = id => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=UA-${id}`}
    />
    <script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', ${id});
      `}
    </script>
  </>
);
