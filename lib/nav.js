// navigation functions
import { tacs } from 'publican';

// <article> link
export function articleLink( data, headTag = 'h2' ) {

  if (!data?.link || !data?.title) return '';

  return `
    <article>
      <a href="${ data.link }">
        <${ headTag }>${ tacs.lib.feed.escape( data.title ) } <svg><use xlink:href="#svg-arrowr"></use></svg></${ headTag }>
        ${ data.description ? `<p class="description">${ tacs.lib.feed.escape( data.description ) }</p>` : '' }
      </a>
    </article>
  `;

}
