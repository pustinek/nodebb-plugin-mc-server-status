"use strict";

var controllers = require('./lib/controllers'),
	plugin = {};

plugin.init = function(params, callback) {
	var router = params.router,
		hostMiddleware = params.middleware,
		hostControllers = params.controllers;
		
	// We create two routes for every view. One API call, and the actual route itself.
	// Just add the buildHeader middleware to your route and NodeBB will take care of everything for you.

	router.get('/admin/plugins/quickstart', hostMiddleware.admin.buildHeader, controllers.renderAdminPage);
	router.get('/api/admin/plugins/quickstart', controllers.renderAdminPage);


	router.get('/api/mc-status',(req,res) => {
		res.send({
				"status": "success",
				"online": true,
				"motd": "§fNerdNu §1Creative\n§6WorldEdit + Protections! §7☒ §2Rev 33",
				"favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFXUlEQVR42u2aO2/bSBDH1+7SpUif\nRgULA25yQArDTeor0hgIYMCVgbTXGDikcXXNfYNIfsYv5dFfE8C9v8R1tiR/B0ZLaZYzszP7kGSR\nSmLgb0lccsX/b2eWy6FMWZYGa319vbRaW1v7KcX9esa7Hx+JPmYqdjxv73aZ+PHdWp3O2/LNm3/K\nFy/+KJ8968jn0KXi/XMQznyqgVUHAPsBhN8AqrAXdtRkzOskdbujiXqPVKy/Xm9E5LUj7e3tVRAs\ngE6n47X3Ujygc7EQVg7AwcFBubW1tTwA3Njz538lyYF4QgDGbP/aAL5//7+CgEHMBKB39Ig0qpRr\nOAbiaGzOCvoHHUX16CQBAAGInP4qAPZf2wGAOQxAgpAGYkEAtMlvkQDAjDVmzXIAUip8+PBfHoDx\nX+sAYONgHgOAzzARgnGr9++P8gGcHA+dUo2fnIxEcSDH421YfH/cxo1jgXn7ykccjFtBBBhTVMLe\nJho5tRLAy5fbIghr3CpkvDa/Xd7d3VXyIcwIIGbcGTpmygSwsfFnBYGDmMW4HAUtBFCf7MS4hcBB\n5Bq/vb2tlATg7HTkFANwejZkGhGdnQ6JTsd9Ug2J7AnWJ7/tIACIV692qm27u/9mGbfa3f272uaf\nw0StAQDSQOAISDW+UgAODw8raSCwUo3jFGg9gJ2dAwdBA5FrPCsCzs+HTjEAeF9JZ+cDotj+GEAI\nRK5xDED77tYAAMMhELnGcQq0HgA3zEEAgBzjKxUB2shrAHJTQIPgAFxcDJxiAC4+DaguYhoSfWJ6\nqhTwJ9Ji+v0Dp9YAWHQKcOOguQCoIJhhfjMUAgAntsgUgIiSlsStAiCN0iJSAAPgUaECuLwcOF1d\nTbTogsjluE+rq8uJ5CWwDEJKAQyFb9cAYJ9WBIB9paoN+W2GGffbfVB1GwCoR1jqv0AA/HYANjFn\nSKjD8fU2/3gCwFRPyOhfbdJvg3aAE273+8AGQ8eDmZR2+zqJgPozmNeOdwDqDqUR9tslAHoEGPKl\n+D0fYdoPTg2/HY92CoBgBMAONzcP5fX1gCg3AujIhwHi2V7aTu8FqDEAwE3i6JAiwH7e3NysFIwA\nDkAa/VAEcAASQDzb4378q4AeAakA+PlZANP3+hzAAfhAwgYlgJJRHgHSdm0OqGd/GkFaBNDjpwBs\n6GsRACbq96+TrgLa8dfuuwphwWOUhZDfP46A+lJnvMugdhUgEdDvPzjdMPX7AyK/nemGqS8rZQkc\nWwhpNUBtHbC/v0/UGgCz3gtoC6SVARAb+di9gLRdSoHWR0DjKfDly32tzw9M90Sfx9uIxscQsXaz\nYWS1KQWaAtCaFGg6An6nQNMp8PXbg9O3r/dEqoFUvVPUQApwCI0DWEYKSEWX1gF4qhTQiqMAwN0N\nLh3A9ESeKgUk49LVoK4IzTKCs0o4uUWlAC6Jh34v0DgAbZTmTQFtAuQp0jgA/TF4odwm66EeAqA9\nN2gcQPz3AIUHKpTj2iVQe27gA3i3RCX+HoDP3KG23BSAwU0HYBI+c0XawxUf3yw17j8HoACMVyki\n+2cBwDW9wGex5hZpx8VQuc3/hUioDB5rny0CWC0/CESKgEhRVKo6S+VxXN9Tz4cB4FXhuQCIpWdh\nhKXwD5XF/WquER6cyNVfqRQef1BS0NSsKIRyPjBCs0SAP7p6/3iOkAD40VAEI85FQBBAYs7nzgHS\nZ63urwGSQ5pGgDSvUIC5EbCoqwBZCYavAv5KMDKre1eBgvTnLaDweVlAIoQlrAPmvRnivxNIXQih\nSDSNApi3HgCGshdCHABAWAqIjNvglB9JhQDI+9fmCQAOYnqN/OnE/f4A+QQwBBNkx5sAAAAASUVO\nRK5CYII=",
				"error": "",
				"players": {
				  "max": 150,
				  "now": 3
				},
				"server": {
				  "name": "Spigot 1.12.2",
				  "protocol": 340
				},
				"last_online": "1540650202",
				"last_updated": "1540650202",
				"duration": 280374980
		});
	});
	const interval = setInterval(() => {
		console.log("calling inteval :)");
	},1000);

	callback();
};

plugin.addAdminNavigation = function(header, callback) {
	header.plugins.push({
		route: '/plugins/mc-server-status',
		icon: 'fa-tint',
		name: 'mc server status'
	});

	callback(null, header);
};

module.exports = plugin;