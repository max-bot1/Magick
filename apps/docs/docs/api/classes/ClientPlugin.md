---
id: "ClientPlugin"
title: "Class: ClientPlugin"
sidebar_label: "ClientPlugin"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Plugin`

  ↳ **`ClientPlugin`**

## Constructors

### constructor

• **new ClientPlugin**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `PluginConstuctor` & { `agentComponents?`: `FC`<`any`\>[] ; `clientPageLayout?`: [`PageLayout`](../#pagelayout) ; `clientRoutes?`: [`PluginClientRoute`](../#pluginclientroute)[] ; `drawerItems?`: [`PluginDrawerItem`](../#plugindraweritem)[] ; `projectTemplates?`: `any`[] ; `spellTemplates?`: { `createdAt?`: `string` ; `graph`: { nodes: any; id: string; } ; `hash`: `string` ; `id`: `string` ; `name`: `string` ; `projectId`: `string` ; `updatedAt?`: `string`  }[]  } |

#### Overrides

Plugin.constructor

#### Defined in

[packages/core/shared/src/plugin.ts:88](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugin.ts#L88)

## Properties

### agentComponents

• **agentComponents**: `FC`<{}\>[]

#### Defined in

[packages/core/shared/src/plugin.ts:82](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugin.ts#L82)

___

### clientPageLayout

• `Optional` **clientPageLayout**: [`PageLayout`](../#pagelayout)

#### Defined in

[packages/core/shared/src/plugin.ts:84](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugin.ts#L84)

___

### clientRoutes

• `Optional` **clientRoutes**: [`PluginClientRoute`](../#pluginclientroute)[]

#### Defined in

[packages/core/shared/src/plugin.ts:85](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugin.ts#L85)

___

### completionProviders

• **completionProviders**: [`CompletionProvider`](../#completionprovider)[]

#### Inherited from

Plugin.completionProviders

#### Defined in

[packages/core/shared/src/plugin.ts:62](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugin.ts#L62)

___

### drawerItems

• `Optional` **drawerItems**: [`PluginDrawerItem`](../#plugindraweritem)[]

#### Defined in

[packages/core/shared/src/plugin.ts:83](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugin.ts#L83)

___

### inputTypes

• **inputTypes**: [`PluginIOType`](../#pluginiotype)[]

#### Inherited from

Plugin.inputTypes

#### Defined in

[packages/core/shared/src/plugin.ts:59](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugin.ts#L59)

___

### name

• **name**: `string`

#### Inherited from

Plugin.name

#### Defined in

[packages/core/shared/src/plugin.ts:57](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugin.ts#L57)

___

### nodes

• **nodes**: [`MagickComponentArray`](../#magickcomponentarray)<`any`\>

#### Inherited from

Plugin.nodes

#### Defined in

[packages/core/shared/src/plugin.ts:58](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugin.ts#L58)

___

### outputTypes

• **outputTypes**: [`PluginIOType`](../#pluginiotype)[]

#### Inherited from

Plugin.outputTypes

#### Defined in

[packages/core/shared/src/plugin.ts:60](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugin.ts#L60)

___

### projectTemplates

• `Optional` **projectTemplates**: `any`[]

#### Defined in

[packages/core/shared/src/plugin.ts:87](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugin.ts#L87)

___

### secrets

• **secrets**: [`PluginSecret`](../#pluginsecret)[]

#### Inherited from

Plugin.secrets

#### Defined in

[packages/core/shared/src/plugin.ts:61](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugin.ts#L61)

___

### spellTemplates

• `Optional` **spellTemplates**: { `createdAt?`: `string` ; `graph`: { nodes: any; id: string; } ; `hash`: `string` ; `id`: `string` ; `name`: `string` ; `projectId`: `string` ; `updatedAt?`: `string`  }[]

#### Defined in

[packages/core/shared/src/plugin.ts:86](https://github.com/Oneirocom/Magick/blob/0b84928f/packages/core/shared/src/plugin.ts#L86)