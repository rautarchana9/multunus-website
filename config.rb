###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

###
# Helpers
###

# This will remove extentions like .html
activate :directory_indexes

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  # blog.prefix = "blog"

  # blog.permalink = "{year}/{month}/{day}/{title}.html"
  # Matcher for blog source files
  blog.sources = "blog/{year}-{month}-{day}-{title}.html"
  # blog.taglink = "tags/{tag}.html"
  blog.layout = "article_layout"
  blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  # blog.year_link = "{year}.html"
  # blog.month_link = "{year}/{month}.html"
  # blog.day_link = "{year}/{month}/{day}.html"
  # blog.default_extension = ".markdown"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  # Enable pagination
  # blog.paginate = true
  # blog.per_page = 10
  # blog.page_link = "page/{num}"
end

page "/feed.xml", layout: false
# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
  #activate :disqus do |d|
  # # using a special shortname
  # d.shortname = "multunus-test"
  # # or setting to `nil` will stop Disqus loading
  # d.shortname = nil
  # end
end
activate :disqus do |d|
  d.shortname = 'mymultunuswebsite'# Replace with your Disqus shortname.
end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  #activate :disqus do |d|
  # # using a diffrent shortname for production
  # d.shortname = "multunus-prod"
  #end
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  activate :gzip

  activate :robots, rules: [
             {
               :user_agent => '*',
               :disallow =>  %w(/),
             }]
  
  ## #Fix: https://github.com/middleman/middleman/issues/1873
  activate :asset_hash
  activate :asset_host, host: '//d3s6qnjdf1sx4b.cloudfront.net', rewrite_ignore: ["*.js"]
end
