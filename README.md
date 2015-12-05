# Radiotopia

[`www.radiotopia.fm`](http://www.radiopia.fm) is static website hosted with [GitHub Pages](https://pages.github.com/). Any changes checked into GitHub will automatically be **live** and **available to the public**.

### Domains

The canonical [CNAME](https://github.com/PRX/radiotopia.fm/blob/gh-pages/CNAME) is `www.radiotopia.fm`, with the apex domain `radiotopia.fm` being handled [automatically by GitHub](https://help.github.com/articles/tips-for-configuring-an-a-record-with-your-dns-provider/). `radiotopia.com` and `*.radiotopia.com` both redirect to `www.radiotopia.fm`; those are configured in [Route 53](https://console.aws.amazon.com/route53/home?region=us-east-1#resource-record-sets:Z28Z0CFFSO2E98) and [S3](https://console.aws.amazon.com/s3/home?region=us-east-1&bucket=www.radiotopia.com&prefix=).

`radiotopia.fm` is registered with [101domain](https://my.101domain.com/), and `radiotopia.com` is registered with [Hover](https://www.hover.com/).

### Media

There is an [S3 bucket](https://console.aws.amazon.com/s3/home?region=us-east-1&bucket=media.radiotopia.fm&prefix=) for hosting media and files that are too large to check in to Git, which is available at [`media.radiotopia.fm`](http://media.radiotopia.fm/).
