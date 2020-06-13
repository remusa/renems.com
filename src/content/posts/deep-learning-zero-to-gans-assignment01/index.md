---
path: '/zero-to-gans-tensor-operations'
date: '2020-05-29'
title: 'Pytorch - Zero to GANs: Assignment 1 - All About torch.Tensor'
author: 'RMS'
tags: ['machine-learning', 'deep-learning', 'zero-to-gans', 'python', 'pytorch']
type: 'BLOG'
---

<p>I attended the first lecture of the freeOnlineCamp and Jovian.ml Pytorch Deep Learning certification last Saturday. Our first assignment consisted of reading through Pytorch's documentation and choosing five functions deemed useful.</p>

<p>I chose the following five:</p>

<ul>
  <li>torch.cross()</li>
  <li>torch.flatten()</li>
  <li>torch.save()</li>
  <li>torch.load()</li>
  <li>torch.reshape()</li>
</ul>

## Function 1 - torch.cross()

<p>The <strong>cross product</strong> in Mathematics refers to an operation on two vector that results in a new vector that's <em>perpendicular</em> to both of these.</p>

<iframe src="https://jovian.ml/embed?url=https://jovian.ml/remusa/01-tensor-operations/v/14&cellId=3" title="Jovian Viewer" height="338" width="800" frameborder="0" scrolling="auto"></iframe>

## Function 2 - torch.flatten()

<p>This function returns the concatenated elements of the tensor up to the specified dimension.</p>

<iframe src="https://jovian.ml/embed?url=https://jovian.ml/remusa/01-tensor-operations/v/14&cellId=11" title="Jovian Viewer" height="355" width="800" frameborder="0" scrolling="auto"></iframe>

<iframe src="https://jovian.ml/embed?url=https://jovian.ml/remusa/01-tensor-operations/v/14&cellId=12" title="Jovian Viewer" height="null" width="800" frameborder="0" scrolling="auto"></iframe>

## Function 3 - torch.save()

<p>This functions helps with serialization. Serialization refers to the process of transforming an object into a format that can be stored. This means it's useful for example when we want to save an object to a disk file for later use.</p>

<iframe src="https://jovian.ml/embed?url=https://jovian.ml/remusa/01-tensor-operations/v/14&cellId=20" title="Jovian Viewer" height="null" width="800" frameborder="0" scrolling="auto"></iframe>

## Function 4 - torch.load()

<p>This functions helps with deserialization. Deserialization refers to the process of transforming stored data (for example a stream of bytes in a file) into an object or data structure that can be understood.</p>

<iframe src="https://jovian.ml/embed?url=https://jovian.ml/remusa/01-tensor-operations/v/14&cellId=28" title="Jovian Viewer" height="null" width="800" frameborder="0" scrolling="auto"></iframe>

## Function 5 - torch.reshape()

<p>The reshape()functions allows to transform any given tensor into a different "shape". Something important to note here is that it will not modify the data from the tensor, so the tensor will have the same number of elements and the elements will be the same.</p>

<iframe src="https://jovian.ml/embed?url=https://jovian.ml/remusa/01-tensor-operations/v/14&cellId=36" title="Jovian Viewer" height="null" width="800" frameborder="0" scrolling="auto"></iframe>

<iframe src="https://jovian.ml/embed?url=https://jovian.ml/remusa/01-tensor-operations/v/14&cellId=39" title="Jovian Viewer" height="null" width="800" frameborder="0" scrolling="auto"></iframe>

Link to the Jupyter notebook I made for the assignment:
[remusa/01-tensor-operations | Jovian](https://jovian.ml/remusa/01-tensor-operations)

## Reference Links

- [Official documentation for `torch.Tensor`](https://pytorch.org/docs/stable/tensors.html)
- [Cross product - Wikipedia](https://en.wikipedia.org/wiki/Cross_product)
- [Cross product](https://pytorch.org/docs/stable/torch.html#torch.cross)
- [Flatten](https://pytorch.org/docs/stable/torch.html#torch.flatten)
- [Serialization - Wikipedia](https://en.wikipedia.org/wiki/Serialization)
- [Save](https://pytorch.org/docs/stable/torch.html#serialization)
- [Json to Java - DeSerialization libraries - The coding Brains](https://thecodingbrains.com/json-to-java-deserialization-libraries/)
- [Load](https://pytorch.org/docs/stable/torch.html#torch.load)
- [Reshape](https://pytorch.org/docs/stable/torch.html#torch.reshape)
