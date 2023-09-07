import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { ReactNode } from 'react';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
type RTLpRops ={
    children:ReactNode
}
function RTL(props:RTLpRops) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}
export default RTL