
# How to contribute?

You can contribute by either opening an issue or directly adding the links.

How to add links directly?

This is an example snippet of Poland.

```html
<tr>
  <td id="poland" class="countryName">Poland</td>
  <td class="links" id="new">
    <a href="https://www.x-kom.pl/">X-Kom</a>,
    <a href="https://www.morele.net/">Morele</a>,
    <a href="https://www.mediaexpert.pl/">Media Expert</a>,
    <a href="https://mediamarkt.pl/">Media Markt</a>,
    <a href="https://www.euro.com.pl/">RTV Euro AGD</a>,
    <a href="https://www.komputronik.pl/">Komputronik</a>,
    <a href="https://www.ceneo.pl/">Ceneo</a>,
    <a href="https://allegro.pl/">Allegro</a>
  </td>
  <td class="links" id="usedAndRefurb">
    <a href="https://www.olx.pl/">OLX</a>,
    <a href="https://allegro.pl/">Allegro</a>,
    <a href="https://amso.pl/">AMSO</a>
  </td>
  <td class="credits">@notallur, @someone, u/someone</td>
</tr>
```

As you can see, there are 2 `<td>` elements we're interested in, those are `<td class="links" id "new">` and `<td class="links" id "usedAndRefurb">`.
Under those you should put links in a structure like the one provided below.

```html
<td class="links" id="new">
  <a href="Put the link here">Put the name here</a>,
  <a href="Put the link here">Put the name here</a>
</td>
<td class="links" id="usedAndRefurb">
  <a href="Put the link here">Put the name here</a>,
  <a href="Put the link here">Put the name here</a>
</td>
```
