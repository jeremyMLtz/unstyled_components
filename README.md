## Unstyled Components

Simple, Accessible, Customizable components you can copy and paste into your project.

## Introduction

Welcome to Unstlyed, a component hub containing a handful of components to help you get started with building your own component library.

I initially started this project afer finding myself creating the same core components for various side projects. I wanted to build myself a component library that I could
just grab from and customize as I need.

"Well why not just use one of the many, _many_ libraries currently out there?" you may ask. And to that I say, valid point. Really I wanted a library that was simple and customizable...
and I just wanted to build my own library (Its a great learning process!). With that, I created Unstyled. The idea at first was just components that had all the accessibility requirements
needed and no styling, hence the name Unstyled, but as I was building I couldn't help but add a few base styles using CSS modules (for peak flexibility).

I am considering Unstyled to be in **BETA** at the moment as I am currently testing it across various projects and I'm actively working to add new components and features.

If you are curious, here is a list of some of the components and features coming soon:

- Accessibility audit of current components
- Updated Dialog with animations
- Calendar/DatePicker
- Table
- Sheets
- Snackbars
- CLI tool for automating setup

**Can I use Unstyled in my project?**

Of course! Just please note this is an evolving project _but_ for the most part, the current components most likely won't have breaking changes anytime soon.

## Installation

Unstyled components are built to work with any React based framework and they're syled utilizing CSS modules. That being said, because you have access to all the code, you can choose
to style the components however you like.

Using Tailwind? You can update the className attributs to Tailwind classes directly in the component or simply tack on Tailwind classes on the component implementation:

```
<Button className='h-3 w-3 py-4'>Click Me</Button>
```

Using Styled Components? Just copy and paste the given CSS into your styled component:

```
export const styledButton = styled(Button)`
  // Copied CSS Class Names
`;
```

## Setup and Installation

One of the most used 3rd part libraries is `class-variance-authority` which allows us to easily create component variants. I reccomend installing it into your project if you're using Unstyled Components:

```
npm install class-variance-authority
```

1. Copy the following code into your global CSS file.

```
:root {
  --background: 0 0% 100%;
  --foreground: 224 71.4% 4.1%;
  --primary: 262.1 83.3% 57.8%;
  --primary-foreground: 210 20% 98%;
  --primary-darken: 262.1 60% 52.8%;
  --secondary: 220 14.3% 95.9%;
  --secondary-foreground: 220.9 39.3% 11%;
  --secondary-darken: 220 14.3% 90.9%;
  --muted: 220 14.3% 95.9%;
  --muted-foreground: 220 8.9% 46.1%;
  --accent: 220 14.3% 95.9%;
  --accent-foreground: 220.9 39.3% 11%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 20% 98%;
  --destructive-darken: 0 84.2% 55.2%;
  --border: 220 13% 91%;
  --input: 220 13% 91%;
  --ring: 262.1 83.3% 57.8%;
  --radius: 0.5rem;
  --text-xl: 1.5rem;
  --text-lg: 1.125rem;
  --text-md: 1rem;
  --text-sm: 0.875rem;
  --text-xs: 0.75rem;
  --bold: 900;
  --semiBold: 600;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: 224 71.4% 4.1%;
    --foreground: 210 20% 98%;
    --primary: 263.4 70% 50.4%;
    --primary-foreground: 210 20% 98%;
    --primary-darken: 263.4 70% 45.4%;
    --secondary: 215 27.9% 16.9%;
    --secondary-foreground: 210 20% 98%;
    --secondary-darken: 215 27.9% 11.9%;
    --muted: 215 27.9% 16.9%;
    --muted-foreground: 217.9 10.6% 64.9%;
    --accent: 215 27.9% 16.9%;
    --accent-foreground: 210 20% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 20% 98%;
    --destructive-darken: 0 62.8% 25.6%;
    --border: 215 27.9% 16.9%;
    --input: 215 27.9% 16.9%;
    --ring: 263.4 70% 50.4%;
  }
}
```

2. Update the CSS variables to match your branding

3. Find a component and copy into your component directory

4. Copy the CSS into your own CSS file, I use modules but feel free to style how
   you prefer

5. Update any import statements from the copied code.

## Done

And that's it, now get out there and get building!
