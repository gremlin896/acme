# Module Federation with nested paths issue reproduction
https://github.com/nrwl/nx/issues/20284

The repro repository was created like so:

`npx create-nx-workspace acme --preset=apps`

`nx g @nx/angular:host host --remotes=shop,cart,about`

`nx g @nx/angular:library --name=shared --projectNameAndRootFormat=as-provided`

`nx g @nx/angular:library --name=components --directory=shared --projectNameAndRootFormat=derived`

Following this, the generated components from the two libraries were imported to the `AppComponent` of `host` and used in the template.
