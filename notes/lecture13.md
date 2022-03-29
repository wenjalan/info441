# Lecture 13 - Extras
## Browser-Side Caching
The HTTP `cache-control` header controls the rules about how the browser is allowed to cache responses. See the [docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control).

```js
res.set('Cache-Control', 'public, max-age=3');
```

Static files are set by default, and will only update if files change.

## Server-Side Caching
We'll use the `memory-cache` package from npm. It works like this:

```js
import cache from 'memory-cache';

// add a new item to the cache
cache.put(key, value, timeToExpire, timeoutCallback);

// retrieve an item from the cache
// returns null if not found
cache.get(key);
```

