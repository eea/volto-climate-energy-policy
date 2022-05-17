const applyConfig = (config) => {
  const allowed_cors_destinations = [
    ...(config.settings.allowed_cors_destinations || []),
    'www.eea.europa.eu',
    'www.eionet.europa.eu',
    'land.copernicus.eu',
  ];

  config.settings = {
    ...config.settings,
    apiExpanders: [
      ...config.settings.apiExpanders,
      {
        match: '/',
        GET_CONTENT: [
          'breadcrumbs',
          'siblings',
          'navigation',
          'localnavigation',
        ],
      },
    ],
    navDepth: 4,
    allowed_cors_destinations,
    tableauVersion: '2.3.0',
    pdfWorkerSrc: '//www.eea.europa.eu/pdfjs/pdf.worker.min.js',
  };

  return config;
};

export default applyConfig;
