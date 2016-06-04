# Radiotopia

[`www.radiotopia.fm`](http://www.radiopia.fm) is static website hosted with [GitHub Pages](https://pages.github.com/) behind a CloudFront CDN. Any changes checked into GitHub will automatically be **live** and **available to the public**. 

### Domains

The canonical [CNAME](https://github.com/PRX/radiotopia.fm/blob/gh-pages/CNAME) is `www.radiotopia.fm`, with the apex domain `radiotopia.fm` being handled [automatically by GitHub](https://help.github.com/articles/tips-for-configuring-an-a-record-with-your-dns-provider/). `radiotopia.com` and `*.radiotopia.com` both redirect to `www.radiotopia.fm`; those are configured in [Route 53](https://console.aws.amazon.com/route53/home?region=us-east-1#resource-record-sets:Z28Z0CFFSO2E98) and [S3](https://console.aws.amazon.com/s3/home?region=us-east-1&bucket=www.radiotopia.com&prefix=).

`radiotopia.fm` is registered with [101domain](https://my.101domain.com/), and `radiotopia.com` is registered with [Hover](https://www.hover.com/).

### Media

There is an [S3 bucket](https://console.aws.amazon.com/s3/home?region=us-east-1&bucket=media.radiotopia.fm&prefix=) behind a CloudFront distribution for hosting media and files that are too large to check in to Git, which is available at [`media.radiotopia.fm`](https://media.radiotopia.fm/).

### Infrastructure

#### radiotopia.com

Both `radiotopia.com` and `www.radiotopia.com` are configured to redirect to `www.radiotopia.fm`. This is done by creating `A` `ALIAS` records for each that target S3. Buckets with names corresponding to each DNS record exist and have the redirection rule. The connection between the `ALIAS` and the buckets is automatic.

They do not handle `https` traffic.

#### radiotopia.fm

In order to support TLS for `www.radiotopia.fm`, which is not natively possible with GitHub Pages, the site is run through a CloudFront distribution that does support TLS.

The DNS record for `www.radiotopia.fm` is aliased to a CloudFront distribution which has `prx.github.io/www.radiotopia.fm` as it's origin. Use of the `github.io` domain (as opposed to a custom `CNAME`) allows the connection between the CDN and the origin to be secure (which is enforced with the `HTTPS Only` _origin protocol policy_).

The `Redirect HTTP to HTTPS` _viewer protocol policy_ of the CloudFront distribution `301` redirects `http://www.radiotopia.fm` to `https`.

A similar setup is used for `radio.radiotopia.fm`.

In order to properly handle requests to `http://radiotopia.fm` and `https://radiotopia.fm` a `radiotopia.fm` S3 bucket with a redirection policy exists. The bucket **cannot** be aliased directly, since `https` connections would fail. Instead, a CloudFront distribution with a certificate for `radiotopia.fm` is used, whose origin is the S3 bucket. It must be configured to use the _static website_ URL for the bucket, with an _origin protocol policy_ of `HTTP Only`. This is a limitation of how CloudFront and S3 interact.

### Paths

The following are paths that should be maintained in perpetuity. (GitHub redirects to paths with a trailing slash)

- `/` Homepage
- `/radiotopia` Redirect to homepage, or the homepage if `/` is being used for something else
- `/newsletter` Newsletter signup form
- `/spotify` End-point for Spotify ads
- `/rewards` Donor exclusive content
- `/podquest` Podquest information page
- `/press-kit` Press kit
- `/ace` Radiotopia Live @ Ace Hotel
