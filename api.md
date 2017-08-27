<a name="module_super-trailing-slash"></a>

## super-trailing-slash

* [super-trailing-slash](#module_super-trailing-slash)
    * [~SLASH](#module_super-trailing-slash..SLASH) : <code>string</code>
    * [~BACK_SLASH](#module_super-trailing-slash..BACK_SLASH) : <code>string</code>
    * [~add(str)](#module_super-trailing-slash..add) ⇒ <code>string</code>
    * [~remove(str)](#module_super-trailing-slash..remove) ⇒ <code>string</code>
    * [~endsWithBackslash(str)](#module_super-trailing-slash..endsWithBackslash) ⇒ <code>boolean</code>
    * [~endsWithSlash(str)](#module_super-trailing-slash..endsWithSlash) ⇒ <code>boolean</code>
    * [~endsWithSlashes(str)](#module_super-trailing-slash..endsWithSlashes) ⇒ <code>boolean</code>
    * [~detectType(str)](#module_super-trailing-slash..detectType) ⇒ <code>string</code>

<a name="module_super-trailing-slash..SLASH"></a>

### super-trailing-slash~SLASH : <code>string</code>
**Kind**: inner constant of [<code>super-trailing-slash</code>](#module_super-trailing-slash)  
<a name="module_super-trailing-slash..BACK_SLASH"></a>

### super-trailing-slash~BACK_SLASH : <code>string</code>
**Kind**: inner constant of [<code>super-trailing-slash</code>](#module_super-trailing-slash)  
<a name="module_super-trailing-slash..add"></a>

### super-trailing-slash~add(str) ⇒ <code>string</code>
Add slash to string

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
slash.add('http://www.google.it'); //=> http://www.google.it/
```
<a name="module_super-trailing-slash..remove"></a>

### super-trailing-slash~remove(str) ⇒ <code>string</code>
Remove slash from string

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
slash.remove('http://www.google.it/'); //=> http://www.google.it
```
<a name="module_super-trailing-slash..endsWithBackslash"></a>

### super-trailing-slash~endsWithBackslash(str) ⇒ <code>boolean</code>
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

<a name="module_super-trailing-slash..endsWithSlash"></a>

### super-trailing-slash~endsWithSlash(str) ⇒ <code>boolean</code>
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

<a name="module_super-trailing-slash..endsWithSlashes"></a>

### super-trailing-slash~endsWithSlashes(str) ⇒ <code>boolean</code>
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

