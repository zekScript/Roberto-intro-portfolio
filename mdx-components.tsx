import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import { Link } from 'lucide-react';

 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 style={{ color: 'orangered', fontSize: '48px', fontWeight: 'bold' }}>{children}</h1>
    ),
    p: ({ children }) => (
      <p style={{ fontSize: '24px', fontWeight: '500' }}>{children}</p>
    ),
    h2: ({ children }) => (
      <h2 style={{ color: 'orangered', fontSize: '48px', fontWeight: 'bold', marginTop: '10rem' }}>{children}</h2>
    ),
    a: ({ children }) => (
      <a style={{ color: '#84cc16', textDecoration: 'underline',  marginTop: '25px', cursor: 'pointer', display: 'flex' }}>
      <Link style={{ marginRight: '10px' }} /> 

            {children}</a>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}