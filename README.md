# ignore-x-frame-options

ignore-x-frame-options is a chrome extension that drops x-frame-options and content-security-policy in HTTP request headers and enables pages to include external pages in iframes.

Almost pages set x-frame-options to SAMEORIGINE or DENY.
This disables pages to display the external pages in iframes.

You can solve this problem by just installing ignore-x-frame-options.

## Caution
The use of ignore-x-frame-options decreases the security because it normally must be blocked the access from pages to the external pages that set x-frame-options.
You may encounter clickjacking so you should use ignore-x-frame-options for developing only.
