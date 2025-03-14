---
layout: ballerina-java-interoperability-left-nav-pages-swanlake
title: Java interoperability
description: The Java Interoperability Guide aims at providing a reference source for the Bindgen Tool and the Ballerina FFI.
keywords: ballerina, programming language, java api, interoperability
permalink: /learn/java-interoperability/
active: java-interoperability
intro: Ballerina offers a straightforward way to call the existing Java code from Ballerina. Although Ballerina is not designed to be a JVM language, the current implementation, which targets the JVM, aka jBallerina, provides Java interoperability by adhering to the Ballerina language semantics.
redirect_from:
  - /learn/java-interoperability
  - /swan-lake/learn/java-interoperability/
  - /swan-lake/learn/java-interoperability
---

## Ballerina bindings to Java code
You can write Ballerina code (Ballerina bindings) that lets you call the corresponding Java API as illustrated in the diagram below.

<img src="/learn/images/ballerina-interop-diagram-without-margin.png" alt="Ballerina bindings to Java code" width="300" height="450" style='width:auto !important; padding-top:20px; padding-bottom:20px;'>

The [Ballerina FFI](/learn/java-interoperability-guide/ballerina-ffi) explains how to write the Ballerina bindings manually. Learning to write them manually helps you to understand the inner workings of calling Java from Ballerina. 

Alternatively, you can use the [Bindgen Tool](/learn/java-interoperability-guide/the-bindgen-tool/) to generate these bindings automatically while eliminating the need for understanding the Ballerina FFI layer. It also explains how to customize the bindings generated by the Bindgen Tool.

<style> #tree-expand-all , #tree-collapse-all, .cTocElements {display:none;} .cGitButtonContainer {padding-left: 40px;} </style>


