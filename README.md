main app's load content does ajax request for each subapp?
 - quicker initial loading time
 - would need to bundle all deps in separate bundle (so as to not have waste with dups)

Progressive web app - server side rendered with service workers


TODO:
  - separate out slides
  - make backbone views use dependency injection to
    be generic and reusable (pageHeader, deep dives, slides, apps),
    and so reduce payload and maintenance
  - remove inline html styles
  - make scss utility files
  - break page-centric suit css modules into re-usable components
  - quicken underscore templates by not using `with`
  - `template()` ?
  - pageheader pass in template props instead of whole new template
  - refactor collection views to extend base collection
