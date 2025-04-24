# syahril's test @kedatech
Front End Technical Test @Keda-Tech


First after clone / download, cd to the directory:

```bash
cd test-kedatech
```
Then, install the required modules:
```bash
npm install
or
yarn install
```
Then, to run all the unit-test:
```bash
npm run test
or
yarn test
```

## Soal 1
is at the folder soal_1, contains the typescript file for each question included with the unit-testing in .spec.ts format

## Soal 2
is at the folder soal_2. first cd into soal_2 folder then npm or yarn install. to run, use npm run dev or yarn dev.

atau bisa diakses di: https://test-kedatech-beryl.vercel.app/

Tech Stack & Alasannya:

- typescript = untuk type checking, deteksi error sejak dini, memfasilitasi developer dengan autocomplete yang sangat membantu apalagi dalam codebase yang besar.

- Next.js = pertimbangan website yg didevelop adalah company profile, dibutuhkan ssr dan seo yang bagus, maka nextjs jadi pertimbangan. selain itu, memberikan DX (Developer Experience) yang baik karena nextjs menangani routing, tersedia banyak library yang kompatibel, juga terdapat layanan hosting modern.
   
- Tailwind = memberikan kemudahan dalam hal responsivitas web, juga konsistensi dalam desain dapat mudah dicapai.
  
- Heroicons = library icon yang menyediakan dalam format svg, mudah digunakan, juga tersedia banyak jenis icon.
  
- Framer-motions = memberikan akses ke animasi2 yang basic dan kompleks relatif mudah di React, memberikan DX yang nyaman.
  
- Eslint = menjamin kualitas code melalui linting rules dan konsistensi sintaks.
