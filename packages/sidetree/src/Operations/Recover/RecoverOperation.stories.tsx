import React from 'react';

import { RecoverOperation, IRecoverOperationProps } from '.';

export default {
  title: 'Sidetree/Operations',
  component: RecoverOperation,
};

const recover = {
  type: 'recover',
  did_suffix: 'EiAdHUPfyqtr9d-NBYwwMHCzryLaTYVAyZl4Hu9GvrupYQ',
  signed_data:
    'eyJhbGciOiJFUzI1NksifQ.eyJkZWx0YV9oYXNoIjoiRWlEdWFkY21NT2x6djdUejVVQ3BmLXd5VkQ3UHZMM1EyWnQ3Z2pDa0stZjJfdyIsInJlY292ZXJ5X2tleSI6eyJrdHkiOiJFQyIsImNydiI6InNlY3AyNTZrMSIsIngiOiI4UTBBdlpWZzF3aVlaUjFmbUU0N1dMRWRNMDc2X3VIT25PRjZfVGJzdy1JIiwieSI6InJfeGtSdkRpV1luLXdjeHBxODNRTGFHOGF5ZEU4bVhKbVhXLXJFRlcydkkifSwicmVjb3ZlcnlfY29tbWl0bWVudCI6IkVpRG1OR3JsRkgwZmU4dUd6bHlDeUYxdUlGMWVadFNVYjVMZGhLelJfOFQtNVEifQ.ksP3xpgfpnhVmtpNF5-RsZCDq4JTzXhC3slp8lM_uyKC_ml5nX5Z7UfwAa0I_PLjinzP5aiVfPYCiCyQYYYP5w',
  delta:
    'eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljX2tleXMiOlt7ImlkIjoibmV3S2V5IiwidHlwZSI6IkVjZHNhU2VjcDI1NmsxVmVyaWZpY2F0aW9uS2V5MjAxOSIsImp3ayI6eyJrdHkiOiJFQyIsImNydiI6InNlY3AyNTZrMSIsIngiOiJTWlZZbTVndVA4Uk5vNXlHdlBNeVBxMlJrRHNaeWdBZlFsc2NoSDBaYl9NIiwieSI6IjFXcEZMaWR3UWV6WGtPMU9kc1g3dEZKQUY2OGV6a1NRdGtDSVc0TmdfMjAifSwicHVycG9zZSI6WyJhdXRoIiwiZ2VuZXJhbCJdfV0sInNlcnZpY2VfZW5kcG9pbnRzIjpbeyJpZCI6InNlcnZpY2VFbmRwb2ludElkMTIzIiwidHlwZSI6InNvbWVUeXBlIiwiZW5kcG9pbnQiOiJodHRwczovL3d3dy51cmwuY29tIn1dfX1dLCJ1cGRhdGVfY29tbWl0bWVudCI6IkVpQi1LbXVOSUk0Z1plSFdIdVVzakg4V19qaFdkX0lnNFFVODBMZ2ItTGlMUFEifQ',
};

const didMethodPrefix = 'elem:ropsten';

export const Recover = (props?: Partial<IRecoverOperationProps>) => (
  <div style={{ padding: '8px' }}>
    <RecoverOperation
      didMethodPrefix={didMethodPrefix}
      operation={recover}
      {...props}
    />
  </div>
);
