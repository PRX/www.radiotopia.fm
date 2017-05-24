# Radiotopia

[`www.radiotopia.fm`](https://www.radiopia.fm) is static website hosted on GitHub Pages behind a CloudFront CDN. Any changes checked into GitHub will automatically be **live** and **available to the public**.

`www.radiotopia.fm` should never be served over insecure HTTP as long as it is accepting donations.

> ___This is no longer the active version of the site. It's maintained for legacy reasons, so some parts of this readme may not align with reality.___

### Domains

The canonical hostname for the site is `www.radiotopia.fm`, with the apex domain `radiotopia.fm` setup to redirect there. `radiotopia.com` and `www.radiotopia.com` both redirect to `www.radiotopia.fm`; those are configured in [Route 53](https://console.aws.amazon.com/route53/home?region=us-east-1#resource-record-sets:Z28Z0CFFSO2E98) and [S3](https://console.aws.amazon.com/s3/home?region=us-east-1&bucket=www.radiotopia.com&prefix=).

`radiotopia.fm` is registered with [101domain](https://my.101domain.com/), and `radiotopia.com` is registered with [Hover](https://www.hover.com/).

### Media

There is an [S3 bucket](https://console.aws.amazon.com/s3/home?region=us-east-1&bucket=media.radiotopia.fm&prefix=) behind a CloudFront distribution for hosting media and files that are too large to check in to Git, which is available at [`media.radiotopia.fm`](https://media.radiotopia.fm/).

### Infrastructure

#### radiotopia.com

Both `radiotopia.com` and `www.radiotopia.com` are configured to redirect to `www.radiotopia.fm`. This is done by creating `A` `ALIAS` records for each that target S3. Buckets with names corresponding to each DNS record exist and have the redirection rule. The connection between the `ALIAS` and the buckets is automatic.

They do not handle `https` traffic.

#### www.radiotopia.fm

The CloudFront distribution for `www.radiotopia.fm` uses the `www.radiotopia.fm` S3 bucket as its origin. It enforces the `Redirect HTTP to HTTPS` _viewer protocol policy_, so all traffic to the site is secure. To support index documents on path (e.g. `/podquest`) the origin must be the S3 static website endpoint.

In order to properly handle requests to the apex domain `http://radiotopia.fm` and `https://radiotopia.fm` a `radiotopia.fm` S3 bucket with a redirection policy exists. The bucket **cannot** be aliased directly, since `https` connections would fail (a limitation of S3 static site hosting). Instead, a CloudFront distribution with a certificate for `radiotopia.fm` is used, whose origin is the S3 bucket. It must be configured to use the _static website_ URL for the bucket, with an _origin protocol policy_ of `HTTP Only`. This is a limitation of how CloudFront and S3 interact.

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
- `/coin` Redirect to homepage
