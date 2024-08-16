type CacheEntry<T> = {
  value: T;
  expiration: number;
};

/**
 * A simple caching class that stores data with an optional time-to-live (TTL).
 * @template T - The type of data to be cached.
 */
class Caching<T> {
  private cache: Map<string, CacheEntry<T>> = new Map();

  /**
   * Creates an instance of the Caching class.
   * @param {number} [defaultTTL=300_000] - The default time-to-live (TTL) for cache entries in milliseconds. Defaults to 5 minutes.
   */
  constructor(private defaultTTL: number = 300_000) {}

  /**
   * Stores a value in the cache with the specified key and TTL.
   * @param {string} key - The key under which the value is stored.
   * @param {T} value - The value to store in the cache.
   * @param {number} [ttl] - The time-to-live for this specific cache entry in milliseconds. If not provided, the defaultTTL is used.
   */
  set(key: string, value: T, ttl?: number): void {
    const expiration = Date.now() + (ttl || this.defaultTTL);
    this.cache.set(key, { value, expiration });
  }

  /**
   * Retrieves a value from the cache by its key.
   * @param {string} key - The key of the value to retrieve.
   * @returns {T | undefined} The cached value, or undefined if the key does not exist or the entry has expired.
   */
  get(key: string): T | undefined {
    const entry = this.cache.get(key);

    if (!entry) {
      return undefined;
    }

    if (Date.now() > entry.expiration) {
      this.cache.delete(key);
      return undefined;
    }

    return entry.value;
  }

  /**
   * Checks if a value exists in the cache and has not expired.
   * @param {string} key - The key of the value to check.
   * @returns {boolean} True if the value exists and has not expired, otherwise false.
   */
  has(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) {
      return false;
    }

    if (Date.now() > entry.expiration) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }
}

export default new Caching();
