<a name="module_super-trailing-slash"></a>

## super-trailing-slash

* [super-trailing-slash](#module_super-trailing-slash)
    * [~SLASH](#module_super-trailing-slash..SLASH) : <code>string</code>
    * [~BACKSLASH](#module_super-trailing-slash..BACKSLASH) : <code>string</code>
    * [~add(str)](#module_super-trailing-slash..add) ⇒ <code>string</code>
    * [~remove(str)](#module_super-trailing-slash..remove) ⇒ <code>string</code>
    * [~isBackslash(str)](#module_super-trailing-slash..isBackslash) ⇒ <code>boolean</code>
    * [~isSlash(str)](#module_super-trailing-slash..isSlash) ⇒ <code>boolean</code>
    * [~checkSlashes(str)](#module_super-trailing-slash..checkSlashes) ⇒ <code>boolean</code>
    * [~detectType(str)](#module_super-trailing-slash..detectType) ⇒ <code>string</code>

<a name="module_super-trailing-slash..SLASH"></a>

### super-trailing-slash~SLASH : <code>string</code>
**Kind**: inner constant of [<code>super-trailing-slash</code>](#module_super-trailing-slash)  
<a name="module_super-trailing-slash..BACKSLASH"></a>

### super-trailing-slash~BACKSLASH : <code>string</code>
**Kind**: inner constant of [<code>super-trailing-slash</code>](#module_super-trailing-slash)  
<a name="module_super-trailing-slash..add"></a>

### super-trailing-slash~add(str) ⇒ <code>string</code>
Add trailing slash to string if necessary

**Kind**: inner method of [<code>super-trailing-slash</code>](#module_super-trailing-slash)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>str</td><td><code>string</code></td>
    </tr>  </tbody>
</table>

**Example**  
```js
slash.add('http://www.google.it'); //=> http://www.google.it/slash.add('\\path\\to\\file'); //=> \\path\\to\\file\\
```
<a name="module_super-trailing-slash..remove"></a>

### super-trailing-slash~remove(str) ⇒ <code>string</code>
Remove trailing slash from string if necessary

**Kind**: inner method of [<code>super-trailing-slash</code>](#module_super-trailing-slash)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>str</td><td><code>string</code></td>
    </tr>  </tbody>
</table>

**Example**  
```js
slash.remove('http://www.google.it/'); //=> http://www.google.itslash.remove('\\path\\to\\file\\'); //=> \\path\\to\\file
```
<a name="module_super-trailing-slash..isBackslash"></a>

### super-trailing-slash~isBackslash(str) ⇒ <code>boolean</code>
Check if string has backslash

**Kind**: inner method of [<code>super-trailing-slash</code>](#module_super-trailing-slash)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>str</td><td><code>string</code></td>
    </tr>  </tbody>
</table>

<a name="module_super-trailing-slash..isSlash"></a>

### super-trailing-slash~isSlash(str) ⇒ <code>boolean</code>
Check if string has slash

**Kind**: inner method of [<code>super-trailing-slash</code>](#module_super-trailing-slash)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>str</td><td><code>string</code></td>
    </tr>  </tbody>
</table>

<a name="module_super-trailing-slash..checkSlashes"></a>

### super-trailing-slash~checkSlashes(str) ⇒ <code>boolean</code>
Check if string has slashes, both slash and backslash

**Kind**: inner method of [<code>super-trailing-slash</code>](#module_super-trailing-slash)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>str</td><td><code>string</code></td>
    </tr>  </tbody>
</table>

<a name="module_super-trailing-slash..detectType"></a>

### super-trailing-slash~detectType(str) ⇒ <code>string</code>
Detect slash type, slash or backslash

**Kind**: inner method of [<code>super-trailing-slash</code>](#module_super-trailing-slash)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>str</td><td><code>string</code></td>
    </tr>  </tbody>
</table>

