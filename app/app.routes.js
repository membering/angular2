"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./home/index');
var index_2 = require('./login/index');
var index_3 = require('./_guards/index');
var appRoutes = [
    { path: '', component: index_1.HomeComponent, canActivate: [index_3.AuthGuard] },
    { path: 'login', component: index_2.LoginComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.AppRoutes = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map