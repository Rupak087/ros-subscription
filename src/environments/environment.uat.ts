import { NgxLoggerLevel } from "ngx-logger";

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {
  production: true,
  mockapiBaseurl: "http://localhost:3000/",
  backendUrl: "https://accounting-service.uat.restaurantonesolution.com/",
  administrationUrl:
    "https://administrationservice.test.restaurantonesolution.com/admin/",
  logLevel: NgxLoggerLevel.WARN,
  serverLogLevel: NgxLoggerLevel.OFF,
  azure_redirect_uri:
    "https://app.uat.restaurantonesolution.com/accounting/cashup",
  azure_logout_uri: "https://app.uat.restaurantonesolution.com/login",
};
