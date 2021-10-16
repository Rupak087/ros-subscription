import { NgxLoggerLevel } from "ngx-logger";

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {
  production: true,
  mockapiBaseurl: "http://localhost:3000/",
  backendUrl: "https://accounting-service.test.restaurantonesolution.com/",
  administrationUrl: "https://administrationservice.test.restaurantonesolution.com/admin/",
  logLevel: NgxLoggerLevel.WARN,
  serverLogLevel: NgxLoggerLevel.OFF,
  azure_redirect_uri:
    "https://app.test.restaurantonesolution.com/accounting/cashup",
  azure_logout_uri: "https://app.test.restaurantonesolution.com/login",
};
