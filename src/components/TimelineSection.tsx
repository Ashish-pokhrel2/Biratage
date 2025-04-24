import React from 'react';
import { Clock } from 'lucide-react';

const timelinePeriods = [
  { id: 1, year: '1800s', label: 'Early Settlement' },
  { id: 2, year: '1900s', label: 'Cultural Growth' },
  { id: 3, year: '1950s', label: 'Modern Era' },
  { id: 4, year: '2000s', label: 'Contemporary' }
];

const featuredEvents = [
  {
    id: 1,
    title: 'Traditional Arts Revival',
    period: '1920-1945',
    image: 'https://cpimg.tistatic.com/09782991/b/4/Traditional-Paintings.jpeg',
    description: 'A significant period of cultural renaissance in Biratnagar'
  },
  {
    id: 2,
    title: 'Heritage Preservation',
    period: '1960-1985',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Giovanni_Paolo_Pannini_002.jpg/640px-Giovanni_Paolo_Pannini_002.jpg',
    description: 'Major initiatives to preserve historical architecture'
  },
  {
    id: 3,
    title: 'Modern Cultural Movement',
    period: '1990-Present',
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMWFhUXGBcbGBgXGBgYHRoYGhoYFx8XGxsdHSggGh0lHRcYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtLS0tLS8tLTUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tLS0tLf/AABEIAK8BIQMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAEMQAAEDAgQDBgMFBgQFBQEAAAECAxEAIQQFEjFBUWEGEyJxgZEyobEUQsHR8AcVUmKC4XKSovEjM1PS4iRUY7LCFv/EABkBAAMBAQEAAAAAAAAAAAAAAAIDBAEABf/EACkRAAICAgICAgIBBAMAAAAAAAABAhEDIRIxBEETIlFhcTKRseEjYoH/2gAMAwEAAhEDEQA/ALCkRWwKlDdb0VAUmIarZ5V2lVclQ34Cha0bZySaiYxWorAHwqKZ5kRPsZHpUzWok6RJgxNoUdvz9KDxDYwrKQNSyNyBuoyon1Mnc0xcY0jEmw1JqVK70Dl+NS6gLQbH5HYjzotsUbigSfVW6jU2eddaooVE6zFb1KioCsmp200xRBs6UKjIvUk1mmuo6zbZqRJFRitzWcTbMcA5VymsXXKV0LgbyJYriK4UrrXbDlLcGamTpR4fOh3Dep1LmoVRQhEIRNSi1YDyrlxud6444LvKoCo0QhFQr3rGjUzlLnGthVcITvNYkUcYmN2dzW5qJSq540aRhJqg1C9tNbJ4VGtZFq5dmMivXK1V3EUOoTTQCF1M2pBimlBRk3qwOWvS5aCpRMVyCQD3Kqymeg8qytNLMFVomhUrIFq7STxpXxszkTrXwrhE1iEV0BTFGgW7C8GpKElSoEGZqsMBGKU8tzxpJCUXPhibpMyDsZpti/8AiYdxudwRSzsoyO607FClBXnMz7EUqG57GvURvg8MEJCRsABJ3McT1olKYrpJtFYdqYxRy67UClmZrCb3rFK40aQLZ0hfGiA6IoUuCknaDMihuEzqNh0ET+EetbKoqzo23Q/VjkAxqvyFBYnM3jKWGda9gBJB6k/dFU/L8ycxhhMNtoISCkGSZCdSj0kmOMcKuWZ5S53ehp4NITEJBA1RxcUQT7VG8k2/wUrEhI5neYYd1P2vDBLJMFabx1JBMetWXA5o07dtYVG8cKX9rsYGGWWgFOawdRso6UxJ8REi46wNqoXYfMW2ca6391ZKUAbAgkx9Y8qbjm26FzhSs9UU6OFcxUQdFSlYqiqFWRLUZqRrma5m9SJTQSWgo9k8zWKttUjaONRrTf1qNocaRvUqT0rlCKIKa5GMGUio3EVO4KhLnCiSMZCU1CRFEqVUCjRmEKjWk13prKJHGEVGTvXaprkCtrZxC6NxQyiEiiHU3oZSaNsFES7isaAHCiEt1txuL1iCIu7NZUsVldZx3qqUqJrlI5iugqKZSF2YlVaVWiqpDEGioyznCDwnzP1oBLwYeJNkOQCeAVsCeh2nyo7BLiQOdq5zTCa0ERNuU1DJuEyhPkg7vQKhdfnypfljx0d2r40WvxHA/h/vRWmaqi1JWIkmnR00ok3NYo3rgOBM1AcSk8aakLDSbVV+1rDimFhtOqdwN4GxHkadnEDnS/Ou87la2wSUpJgDcQZH+1DNfVhwnUkxZ+yfAjuXzq8QWk6QTyAMj3HpV5xGGJQSgJUoCyVgkHpYiqn+x1YLOIiI73eADBAMH1mB1FWvOG9IncdLEVBPtlmOdaKq+gBDjrydJGo6NRUlIHIG4mNqoPYbAKXigsCyDKies28yfxp32mcxOLeVhGglCEJStZKoKgTziTfgBVq7J9mSw2AIMiSuRCieIjhT/HhW2wPIyproaJJFqLQBG9ROYdQ5e4raGlHhVbafsiTolaM0eyQLUt0lIKjYcaIYzJgRLqZ6mPrSpsZGSGfCoIvXTTyVCUrBHQz9KBxmcMtTrWAeW59t6m4t+hrnFexk2IE8a2pVKmM+aUB4VjUQBqTEkjV9L1OvMmpIKwCCAZOxOwJ4E0KTNbrsJdFDKF6kW4Kh1USOZuK4LcGukqrSiaYCRLTXKUjapjXOmsaNI1CoiqBU4I40OtwG1bF7MZrYUJ3d5olw1BJomcjr6VMlu9DxRaRYUubdaCRru6yu9YrKVxYVnKwIFcBNZqrAqavoms6gREVhSK6TFROOUSMBzY2tW05hcgmDFutcuG9C5ggadRAlIsfO1Kz4eatdh4snHT6JA6ltwOqI0hKtQ3sY2HOQKYMrS8kFMNmZte3AE/l71R8c64VJbSCpSjZPGYJk+QBM8Ip9kOPDC0srHxJCgq+53B9qnhCS0gsuVJJv/wAHGMwCG1NhZJ7xRSLxEJUqT7D3qbAZU2YV8SeE3nrSHthjlKdaSJsQB1KgRTzN8YhGGU2XNCigpTAk2F7cuE23ps5yirsmj9mS5hm2HaFggnmAInkDxqmudpsXilKZwrIWmSO8ulIvEqVJB56RvUOSZO3i1JASktoI1LCbrO+meIG1uVerYRpttIBSlHKIAt04VLbe5FyxKJW+x+RHBskLWFOLUVuFIgFRiw6AAXphmZJRZJJIsL0+DKT+vpXYw4reLZ1xPDu0GSYkYj7ShJsNJTcGL7H1pWc2QIhbrL6SZBJCVdbXBnnINe740spHjIA6xVccw2CcWUJZS6o87R6muUq0xiutf6Kzkn7QmgEt4lpQUBBcTCgepTY+0+VOsR2twSRKHgskgBKJJvx6Ruaq/avsz3YLrSLASUok+t/wiqvgnEqGpMSN7QRT4LkT54KO3H+z0egvdsEA2ST50td7Q4bVrWyVHrF+kbfWqq9ta1awreshAOkcVcYp3FIiRfcuzjEYw920nuGwPERcx8r9KNOQtJUgFMkqEqUZNpPlw4CuezzYQ2lKAUoPHiTxJ60ViyQ4gkmNUCTzBoMn9LGYGvkX8gna7OWMOkI0SoXSJ03iOBnYmg+zq2l4Rx1xQhwq1gfCnhH4zveue22UfaGpTGtFxz6+9edYXMFNBTSpCSoHyUJFx60rBxa/ZX5Sl0W/D5urDqAaWXmQLgEgjnF7fQ1YMD2kbUNQcSRyMJWPOa87ddSQDsfah0ugGeNUuKZHG10z2bBY1Dl0qBohU1483mmkWsbQQePPzq+djs/OISULMrSJB5p2v1B+opcoUOhNvsskXqRRqJRqN0maBjEcu9KFUnhRoXXC252oKDA9dvKuNddupg1pBB3pjfsA4QujFKoLEoi9SMObAnesezSeDWVmqsoOLOsEC67DtDBVbW5w+VWpE4SHaGedqdjArVcwBTPC4NKREAnmQKCWSMQlBsRpVxNSLUA2suJJRBkedpp4vDp+KBMcq13EggixF540EstrRvA837MYknMEkAqSEKB/lB0+L3geppv25wpbcS6kRb5gz9Jpv2fy5rCqeAvJ+IwDpiyevGhe0o7wBAMiSRPXgfL8azHFxSE+TOMpa9CdnEd9icLJki5/puD8vnTDtrlveKSTGlIMg8RPLjY1XMp1M4olf3Ake8/2q39oMQlbYIM2N/w+dHKKfYtScKoWdmcb9mX3CbJ1SCeAI+s2HK9W3H5ogIuoADmfrVPy3Alau8IJ0gAQY2mT86sTLaAjwiTPKRve46czXn5vIjCTitns4t44t90HYDOilvWHUd3MAqBNydIgjhqtRBztZUQspAHIgA9ZJ2vSTN8KlemRcGUC8AhJOpVojVG1CZl3MTKZJ8WoC6oFxwHDhSFnqv8ABqim7Y47Q5shTakakRpMxE+9eVZf2lWziEkKJQSkOdUggn1MfOjs1fWtCkBSgI2Mwd+JuPcjyoLspkilpdxGnxMxpBFtQvJBsSBsDx8qrhOLVsNdUj0hjGlSP+IAkuHwp2gAEzG+wrzXtTgyw+VoGkEEydlc/wDem+T4wqcBVKlk7mSTP4zIr0PAZE06kqcAWsQII2O8TyH65VvJ8kl2dk4xi+R4vg8y1mDAVw6/3q49l8ubIKlmFTt06Gn7WV94twYRhm0pLhSJMGJANkj0k1Te12VvsqgpW2OInwnqmBEdBtVEZ7pnlZcae46L1jMe1h0BS16eQ4noBuSaoecZ0886lydISZQnl59Y3pNh0JT4jKldTWP4yDv4uuw9KZSfYEVxei65fnnefEPEJm/D+1Kc37PtuErSVJUfUT5VXcCXCrU3IjdR2/vVhwOZqWClSSCDGoXH5/KvPnB45XBnqwmskamhHnLi1NAFBC2yUqWDIUkbeX9xXJyjU3KXSFQSBFjHlcf3qzJZJZxDikp7oDxE7lUQTHkoD+kUtZZbcYaKkeIJQmbjUQALxvTsmWVJgYccLlFoq+lSDJ8QmJB3PSm2RZorDPJcTcHhw5EGlmKJQ4pBEAEkDzG9cZeSTBBM/I86dGTa2TZIb0e95XikvNpcTsRsdweIPrUzrdUv9nmbpTqZWqJPhnntHnYVeXG540E2lpmQ2C1qpi3feuFJobTQYHiE3kUOLUY5QxNHHaBfZ0/cCoG7elY8Z2rlCTWxR0mc/a6yt910FZTOIuzGmVK2sKZZdhEpvurmfwroAAWqRlVDKbZqikFdakbqBKq6aUaWkFYQoUO9XazUC1X6UaBZW+0mEVJVsFRpI4KAiD0P4VUMbm7oBbUY6n5GvTM5wynWVJT8VinzBn86oTvZnE4gg6A2APiWY/07/KjUtE04VMAZfUtSVkTKQCeon8CKZoUpZDYmLT6U5yjsW03d14r/AJRCU+06vpT1hrDIMNNlR/lTv/UaGUr6NjxTXLoFyvLwQE8I2Tf9edO2cqi4SBbjc0Vl+FcjWuEjggbDqo8TUigCDqWY4kQkR1PLyqRY4R6LH5EmtKhdikIR8S0ieAAk9OJpFj8PhVnxqUnhYaRHtViYbQrxNtFY4EqCZ6iTqil2evvJR4MEFc1FYVH9KSCfempJ6Yl5slXZWsXkWDIlt+PUe1JXMpdRJwz6TeSgkpm0GYMGQAINMlYUukleEEcdBWg++oiaT5jkJk926pPJLif/ANJsf8oo/gj+BUfJyJ/1E+Bw62nQ4W4kDf4QefLieNXLBY/S0UBWylyeJSQVT0Ph9zVAy3LH0rCVvLbvAP3fKRINXjJcmeAha21A8RYx5gQfWu4RhsOXkSm6ew/sTiEAETCj1+VWbMcI3iG1NuJCkkQQf1avLc5xycKpSLBSTHHxC94G3XzrWXftAUk+NCgOfxCOvEUpwkuh8ZKWyvdrsgXgnigCUG7ajxHI9RSjLMvLjoTvJlR6V7IjO8LjG9CyhQIulUfoGt9n+xWGRKkKWQo8SLdAYn51rzOq9hrGk7fRVDgkJRpAge1ANtBJMmJr1F/I2U+HSDPEjUZ9UmKoHabLw2okRHAfCR/STJ8wKl4tdlkZqXQszZ9oYfuEKJCyCq/AEG/8xKRbgKXMYxKDe54DkPzoHMHCDAEeYNAlSfiUL8jsflVccXNfYneVY/rEkzjA98e8bub67z5bTwqDsxhdb11AaQT1PTrTfKmX3Ekt6EJuTcxCfFYcdo9aFxGC7pYJ8C0jUAoQqbCDykKnymmOH14oUp3PkzM6AQuU2O5jp+vlV77E9qA8kMuHxjYz8Q5edefYslSiCCCLR+dcYXDqB1pJSQZBHDrXLHeNJgTn/wAjaPczHGtL86rvYvNXX2Vd7BUhUaojUIBBPXerARU7+uhq3sGxExQRMmmamppdim44gE7Em1MhK9AyVbIXjFdsIlM1i8tbxLcEupUOIUpJJ5gTFVh8Y7CEltz7QyDdK0gKT0MX9b0+MaYlyTRaNQ61lVb/APsFf+2X7n/trKZYJfAipGkdKLSyOZrpDfKkUxoNp6EVMgUWiK0tseVdR1AqhUMTRLqYFCLcAvQ2bVGBzxad+f4Usx6R3t9QneDRaXlmQ02VrV96YSnzPOiGMr8Wp5aSbeFPD1orUSWac3oEwLCHDEGBvqJM8qsmGQkCw+UAUK/i0MpJiI2AFz5VFhMapbY/jWSPITBPoKVJ8mFGKiHqSpw7wjgB9arGa4V3F4gsIVpaaiZuNW8kD4uQHSn+a5gnCsKcP3R4R/ErgPelH7PsXrbW85Gt11cdYiY+npRRXsNRUnTGOH7MpQm61qPGVG/oDA8gKGxLLrEqQorT/AqJ8go7+R96fF+DvVN7cvYj4mlgbjSr4SOH+9c37KoYVL60NMqzZp8HQRqT8SDYg73G4+lEvIbcspKVDqAYrw/CZ04ziu9PhUDCgbxw9RxFen5P2ibWdoJ3STbzSfwoo72SeRj+KVehhgMvTqcbUkFEWkAz0qqYTO/s768OZAQ4QCq5APwmfIirq5ifvgao3j8uNUXt/gy4U4pCIsUu9CD4SRyvv160fvZPS6A+2WC71JcF1pMxzFVvBo8AI2p+zi+9aj7yRf8AtUmTdl1utBaHG+IiVSD1tY0c2krCw8n9RNgW0rXpgmNwkfSL/Sr32fzVQltolvTuhySeUhJ2HWYqudm2iyXUOjS4FkEdDEEdDvUfaPEgqSpB0qSD4gYMV5eTlOV2exDGlGi25tii68VKKtOn4TdKSmAY/wAWqQSOYtFV/GPrultzbgQYjyBA4DhVcw2bOmYTr6nUoeYBNN8Ap5zwoSQrqvTP+EEj5Utwnds3+AHHvOASohZj5etqr76pAWkSDuNqt+IZcSDrQbbgwT7ULlnchYJbSUz4kRYjbY24/KnYsnDdCpw5AGUZmEAhSVJBQUggTEmf15U+zHG4VxffDSsykSeA8YiDy1A/000XkjEBzDj+mTBHSdvI0sxfZV12VJQhJ4TYn2FVxyQltMklGcXVFZzYEPrcFwYJ9h/vTrJktlBJvbbnHKpGexuIO5Sm/wB8z/8AWaWZllzmFc0qi9wUzB63pyaekxUov2W3sTjRocRpgpXJPPULeto9qsxd5CKofYxxwvGEkoV8RiwIEgzz4etXpSaTKK5FGOX1OVOEDc0LisLq0KAClyZkwAOg9+tZiH0pkqOwBA8yQPcg0ZgsvWQgqlJUdv4RH1t8621HYMm5aNoV3balOQVcIm1rJHPafeuAQ4ApSCk+xG/H0rrFIDaUrEq3+K97yDy5elSqxaXWlFBm3kQQeI4QaD599HfHoH+yN8j7j/trKU/bVdfY/nWUfzxB+NlsaVUwXSt/NGW1EKcEzsLn5UW09qMJhVpEKTceUzRWhlMObVUTzwqAvjabjccR51GFUDYSRilnelPaAOBrW3B0/EIm3P0pq9FC4p8IQSRM2A5k8PLrWoCatMq2Fz/ErIaauoD7trczwAqxNZg42nWspKgPFwB/v+opDlrCk6kMJkqMrWdo30pJ3HlyrteAVr1POhKQeG/kkHbzijfF9kSbQzGI706iCpR4XSkDrxipcxztGEsYW8RMCwSOE8h0ofH5u0xhwtCTpTdIO61KOlJJ6mfQGvMM9zBalwVlSlXV/iM7/lQKKe/Q6EW3S7Ce03al19R1KJ3jkPLkKtmQ5vpwuFiwQmVHmrWqSK84+y+AnpVs7IvheHKNyhcxySsCD5SFUEpWtHq4fGWPvs9OTjtQ1C4NJu0zhU3qEnRcjmOnWoclxYDRQZlIkR8xQuOzKRayfY0tsdGFPR5xjfG8CfvKInpP96JBdYWUDgSAN5ANo5iDUGYQCTyVb50zzf8A5rZP3Wmwrzj8iB6UcJU0D5GNTg1Qbkz+MeUENkp/qIAA4mIq0ZlhVJZU248pxxY0pgQADYyTuOnSbUN2KUhOsFQCthPKJpzmjkhKgNREx1O8fL51S+zwG9aPJMNj1tK53g+m4NWDLc5KCHWvCeKTdKulV7AJClLQ5KFTxGxJ4j396ObyZ5JOgBQ6XBou9ByST/Zbc2zAYju1pSUrIhQ8ri/EXNLnckcUNRk3mKDb75EakEEVZ8qzMOCIg8qjy43Da6LsOdTjxfZWcIC0sCDCjEclHlyk8Kd4lpenxMuCLyEm0cbVtWBLmISNhq1HyTf+1WsmlRjY9yoqGKzoFtPfDWJjWmygNpPBXlaocVhAmFWWg/C4i4PQkbHpTbOslDqVaCEKM8LE/getD9iMA+0hwPfCo2SYMG4JjhIjztXPGma2qtEGUZiUeFVx+oI/Gj/3qokwIta96bKynD3JQPQkfKbUnxeA0q1MITHLj7zNKlgfYCkhzluYd4m/xCxqbGYVDoAWhKgNpE0hyh1SSvUkpmLEcaZfb6qxXxQqXYchATsPQVpbhj0pecd51w7jOVN6MNZbh+8xDrpg6CkJBE/CIJ6G49zVjwWPQu6TdMgjyMfhSDKiU94ealfPSfwobDIBXiGzsog+RUmJ+QNdLHexPIlx3aoNYhbBSSiAdQEgE7ggcDz571s45pYLja9KuaePQjYikmHSlLajpCXGleLrFiPXf1FLM1x7CAVJkTukbHqL260LhFGOYf8AvF//AOP2/vW6qP79R/0/9f8A41qt5f8AUy5DbJFKJgXUr4pN73tPE16T2cUlLZWdBXx0jStIt4TYTtNeR4PMQlSr7kDpBB4c5i9emdl3ULw6VmJUSfFckSQDfpQdMrnJy0FvOqdcDiEKJRdK40607FCgYv8Aq1Nwk8BQSX0CwVtU6cckj4hHnW2geLRK+i0zSbNwoDWlGuAZSeXMc/KmD+Ytwb+0mh04xBi8edapJMGeNyVMp2J7TKBIBI8ht67UXkmWu4o6tUIk7XUY+nnVlxeCQtsoKEkEGAABfmCNjSvDrRh0El7Sn+ax8pF1HyE03la0Ryx8XsR9vcelCVsgR4mkpTyDYKlK9FKA9a8/aVqJV1NXHO8oXjHlOjUlsIhOoQXFibwbhNxvcxVTQ34yIieHURS5NVSPR8LHT5MckpSxH31D5R8qgyB7uNLy50lRQqP4CIJ9CQf6abnKtLBcX8WmAOQ50QnJwWGeRRq9VEk/Wko9GRd0YVtaEKQYOkX4G1V3OcJIURvHzoTspjXWy4woy23ASTEgESExxESPSrC7lhe8SkONpP3kqA9dJkR7VzQtNrs8tx6vhn+IT6Vbu0uQulJxDOlxtQ1SmfhN9qW9peyzqV6m1ocAmQk6T7G3sak7G5+rDL7tZUEixSZgdSnyrn+Q07ugDLMyCClXFIvPGRB89zViw2eJ0wDF9hehc+yJtSi7h1NqBMqbStM34pEyfKkLeDSqfEpJ4cY6EG4qqE1JHieR47xyf4D+0DIWEvotBhQ6Kt8iPnXGUY9barKIHLpW2MGoAp70uAi4/H+9LVtkKg8KYIVNUXF7OG12Va3CSfpFLxi9DiC2CZJkHiCAPTj7UCxBRoQmVkfLmaZZbgVtIU4szAsOXr1pOfLGCp9/gZhwylJUNTiihaXimUwQRsQDx6+VWNh0LSFpMgiRVTyvDqxLoCgdCYKwZEck+p/GrchITCRAA2FTQuj0stJ0jRTvUTuIQ2kqWpKR1IFRZ1mKMOyp1RFgYE/ErgK8zRmPeYgOYklQMmNwJ2ATyHKiboWtnpCMzZd8CXG1TwCgT9a0vB23qt5VlTz8gKSpCjtNoBsQRGk2v9KdB5TLoZcTpQRCB/xVwQCoy6sAKsOExasx5U3QU8TRIGYrFBOxrbz4FL14mqaEBawmh3sU2hMqNBYnFQkqmlnfayJVMDYfX6UE3SBlNRG/77CGlrSCqOB48J36ipskxevXiVkIbgJ0z4lKEEwDtaKWYbLVBKHPCUKVKj/CEqgggk6pA2g3obFOJKy2UpCCshGkiSNQAPhCQJgcBym00v5JdCr9ssubOYBIKgnXruohUkE8TqUAJql5xleHUdaVqMiUxMQDBSRwUN+RF7UQt1DS7AqBIlXwpibgHde3qaXZ5g9J7xhRKCZKTPhChEmbilxu+x8XH2iD93H/AKn+r/xrKA+wr/jH+Y/lWUyv2dzh+Bnk7KUkkpSqRB1gKBvJt7VYxmD0QEpj+UkD0jaqj9rKDO3mIv0pjlz72IV3bfhR95XAeu01NPm9s9qOPEo1Q6bzYT4gQNiZ1AHlI29qbMgzPyqv5hhw0juBME6iSZJMRNG9m8VKNC1SpJIHPSP1FbjkpCs+HiuSH8GKjCuFbbdAPSuVJE2ptEYS3ilC2oxXDjkmfyqOBzrl9cCtQLo049ECqs9hU/aXCI+JCx6iD/qNO3HJ8qS5grQ4lzgRB9DP68qNxpBYJfcf9oCAwUiNh7RJ/CtMH/02H/wpAHNRITA9RSTPscFNgpO9varN2TQHVM/wMobI6rUmflc+cUBW9AmDy3XjXG0GEjuwtXPSJPuSfSvQXHGQAg6VFMC4BAkW/XlVO7O4tIdxjhEhBKh1IGmPPULVasgynSAt5RW6q6uQJubetak/QjNJIWFtp2ScPYixDKm1CCAb3ncERuAapGedmsQ4oltpakj4VqSG1DjpVJAUL8K9nUYsKiVHG9FwExztHjvZfBqZcAxDeg3jWBBPRV596j7UZA+h1eISkKQq50q2sJtv8q9RzTJ23gQRboYv6VUsZ2IVr7xLqlwfhWSf9QIPvNd8bTuI1eRGa45DzhjHwTunyvUPe3JlRnnN6b5t2QxDZJ0iJtek4QUeFQIM7ERaqIytHnTxKMnQ+7NYgSo7mAIm4A/uas+DxZvEj1HtVeyHA6U94YlW3+GnCLUieOLly9j8eo0OsI7B2Inygn0o0NCkjOJ2HpTFKlREwOfGhuhjVle7d4PWEJBA4ieJvb2NUZqUOhLqYIIj9QQQZ+VegdqGAUJVpKtJvBvB4/IVR80f1iBcCY1CSn1oN3T6ZidbR6d2WwzrSC4lAIUZ0p4Typf2zzxZRB1IQCkq8O3iEHnY1r9n3aIqYCV/dtPOj+0riXEqSkalEbb2/RpCXGWwnJvZTsb2xbWfCk77mPoKHVmOv70E7XEGu8f2NU2024TdVlBVoM2HtVaRh1hRAFxNjEmOAqn5OXTA40Wd91YQUkEkjw8OdydrRUuUultNyCZIAgGUatUKPoBQbeYd7hwQdK0FItxSZ/Gi20rBBUoJsTESTRRk2tkua4sb4nEqWlCQkJKdwIPqANqiwy0hXfPFISkG0gkqjhFoml2IdWEAJ8OoeJRmSSTveYgTvSXOwoJCUkkphRkSVGYSnbYXPXUOVLePYWJ8v5GGKd7wlw6RclCTYDjNiDNKXc/JTCWkpVsVySbcuW3Og8Y2qNGqbhMncCxJ9yfK9T4Ds6taZWvSN4Fz+EU1Y4tBtOL+wN9vVyR/lT+VZR37gb/jX/p/Kspnxg8kXTOmFK1BC2VjkJBI53qXs9lC0jWsWHwJSLDmfOqYcyU0ohKoAM/Ck+lxXbmeuufEtZ81R9K8x4Z1R70ZxktMedpVnVKkgHqpEn0mkeVrh9G4k8L777etcMYLWZWSBwA/OneBwqEGUpg8+PvVGPC4oTl8qNcUPRzrSn4JB4i1DpfqLELkin0efYQX64edJqCt6qKgbOXFUHmjUtGbcR1PD03o9CJPPpzOwHvSztF4TBPi3MTF+FDJ+h+CFvkxJinNTXK59z/tXoWQuljLe9IhZSSOZEQD7RVIyPBd+tDR2Uok+UAn5Vfc9ZS42AnZHC8QBGkDhahKJP8AJrsTlqlIQtf/AC9Wu+63JkE/ypMxzN+Aq/IVFKez+FUlhCegmnKGfWm6R585ObswOzXAE0SGE8hXakAbVvL9AURN4fmfSpFi1SJVauVG1ctnWLMXhdQqv5p2facsttJjYkCRVrJod2DXUbZRcVk60bXFBKYUN0mr86yImlOMYBoWqCTsrOEbk7Xpg6/pFT9yRJApRinjNxQxpu2HK0tEWKeJmqxnms+FNhxIHA2M1Z8Lhy6vTw3P5V1lzKSp5woCgDpSCdIgA9D+jQZ88YfUGEG9m+wWAQltSCrxBUQOPWrpgcAhJ1RfifXaqj2Vy8qUp1KtJLigkEWUBE33SZOxEXFPl5iptelY4xzqZxd8n7D5ekC9pGO8ebZJhJcSRzghRM+oiqf2o7LLTqxDKZR4iYBOmDvbbzr0PtBhgptt2YIIvF4MWHrHua5zrFd1h1afvlI9Dv8AKfelq4zCtOKPG1Mt6ULQTP3wdiZ2Hy96Z4dPdgOKOoKTEyZCpn5xFJszxCG3FwkkTq08BOwnlUuTYZ3EkkGEJtM7E3gD8a9CC+tk04OTHj7wKYBuQNoNt4M+vrQ2XrCl6x8MpSOsWJ9yfam2W5QwwkLdlRV8IjcczH0ozGY8NKQhplJLh8IhItaZJrJZVCtWHj8ZpO2B6gBJ5j571GmAonhvVn/cDj4lZDYMwlFz6rI+gHmaQZr2TQiQoqPXWTNHDLGWjn49exP3o51lQfuFPM+5rKdYPw/s/9k=',
    description: 'Blending traditional values with contemporary expression'
  }
];

const TimelineSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-800">Our Cultural Timeline</h2>
            <p className="text-gray-600 mt-2">Exploring the rich history of Biratnagar</p>
          </div>

          {/* Timeline Navigation */}
          <div className="flex justify-between items-center mb-16 relative">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-red-800/20 -translate-y-1/2"></div>
            {timelinePeriods.map((period, index) => (
              <div 
                key={period.id}
                className="relative flex flex-col items-center group cursor-pointer"
              >
                <div className="w-4 h-4 rounded-full bg-red-800 relative z-10 group-hover:scale-125 transition-transform">
                  <div className="absolute -inset-2 rounded-full border-2 border-red-800/30 group-hover:border-red-800/60 transition-colors"></div>
                </div>
                <div className="mt-4 text-center">
                  <div className="font-serif font-semibold text-red-800">{period.year}</div>
                  <div className="text-sm text-gray-600">{period.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Events */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <div 
                key={event.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="px-4 py-2 bg-white/90 text-red-800 rounded-full text-sm font-medium hover:bg-white transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-red-800 mb-2">
                    <Clock size={16} className="mr-2" />
                    <span>{event.period}</span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;