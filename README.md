<div align="center">
  <h1>Gaiated</h1>
  <div>
    <img src="assets/img/os.svg" style="margin-right: 5px;"> 
  </div>
  <hr>
  <b>A Firefox extension to explore potential open traces of Google ID (GaiaID)</b>
  <p>(optimized for Firefox)</p>
  <p align="center">
    <a href="#about">About</a> |
    <a href="#installation">Installation</a> |
    <a href="#usage">Usage</a> |
    <a href="#features">Features</a> |
    <a href="#permissions">Permissions</a>
  </p>
</div>
<br>

## About

Gaiated is a browser extension that helps you explore potential open traces associated with a Google ID (GaiaID). When you find a 21-digit numeric Google ID, this extension allows you to quickly check for related information across multiple Google services.

## Installation

### Temporary Installation (for development)

1. Download or clone this repository
2. Open Firefox and navigate to `about:debugging`
3. Click "This Firefox"
4. Click "Load Temporary Add-on"
5. Select any file in the extension directory (e.g., manifest.json)

## Usage

1. Find a 21-digit numeric Google ID (GaiaID) on any webpage
2. Select the ID with your cursor
3. Right-click and select "GaiaID Explorer" from the context menu
4. The extension will open multiple tabs with different Google services, replacing "XXXXXX" with the selected ID

**Note:** You may need to configure Firefox to allow multiple tabs to open simultaneously.

## Features

- Automatically validates that the selected text is a 21-digit numeric ID
- Opens multiple relevant Google services in separate tabs:
  - Google Maps contributions
  - Archived Google+ profiles
  - Google Album archives
- Works on any webpage where a GaiaID appears

## Permissions

This extension requires the following permissions:
- Context menus: To add the right-click menu option
- Active tab: To access the current page
- Tabs: To open new tabs with the target URLs
- Other permissions: For full functionality across all websites

## Version

Current version: 0.1.1
