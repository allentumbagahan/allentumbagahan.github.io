/*Go To https://allentumbagahan.github.io/MySunflowerlandBottingAndManager/read.me For More Info*/


main = document.getElementsByClassName("w-full h-full relative")
plotToClick = []
d = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAgMAAABGXkYxAAAABGdBTUEAALGPC/xhBQAAAAxQTFRFAAAAuG9Q6tSqJitEPjZUHQAAAAF0Uk5TAEDm2GYAAABhSURBVBjTY+D/z8DAACKsVgMZfKsOMLyCMDYwvAoHMnijkBl/gAzmXxsYrh4AMhhMCxAMexDNwA/m0g3ALX0FttdqAxID7C+gU+HeuQVhAN0M9k5oAYMphHGAgR/sr/8MAKPEKneqHAQSAAAAAElFTkSuQmCC"
selectedplotBtn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAgMAAABGXkYxAAAABGdBTUEAALGPC/xhBQAAAAxQTFRFAAAAuG9Q6tSqJitEPjZUHQAAAAF0Uk5TAEDm2GYAAABhSURBVBjTY+D/z8DAACKsVgMZfKsOMLyCMDYwvAoHMnijkBl/gAzmXxsYrh4AMhhMCxAMexDNwA/m0g3ALX0FttdqAxID7C+gU+HeuQVhAN0M9k5oAYMphHGAgR/sr/8MAKPEKneqHAQSAAAAAElFTkSuQmCC"
pBar = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAHAgMAAACq6/+0AAAADFBMVEUAAAAmK0T///+Lm7STJllBAAAAAXRSTlMAQObYZgAAACFJREFUCNdjEA0NDWDIWrVqCUMCA4MKmIBw6////wKWBQCxlQtcuqNDvAAAAABJRU5ErkJggg=="
seedlingB64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAAGFBMVEUAAADChWm4b1DkpnImXEJjx00+iUgZPD6OuaZiAAAAAXRSTlMAQObYZgAAAFhJREFUCNdjGGjApKSkAGYourgIgWghkdBQR0UGBkZFk9QwZyEBBiFBIxcXZUNFBiFhI/FCCMNYUcgYyGBUNAYCoBqQEEgApE1QECQAFFJSAgqAhAQFgQIAdFEKfdt76dUAAAAASUVORK5CYII="
seedlingB64_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAAFVBMVEUAAADChWkmXEI+iUjkpnK4b1Bjx00/XOyGAAAAAXRSTlMAQObYZgAAAG5JREFUCNetysENgCAMQNGqC1gDd+2BAUri3QQHwMgCkLD/CLagG9hLf14LP85Ib7i6dtgr9/DlC98DiF3R7ZnabaqZ223xmWkDGC75DXYGi0R8HxGsORc2LULEIDHEICM/SgoghKgglJKAEqLAAzgbEfUrhvEbAAAAAElFTkSuQmCC"
seedlingB64_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaBAMAAABMRsE0AAAAFVBMVEUAAADChWnkpnI+iUi4b1AmXEJjx009pFF4AAAAAXRSTlMAQObYZgAAAGNJREFUCNe9y8EJgDAMheGIeDelHcDiAIVQ79EuIKUTBNx/BPMcwhzK34+Efp+54JVCh+H32GXVYxHrgkgifdxEk45Rc1wp8p7quSnF4BG+yMrZY9Ls4zsgAM6YAU6tOYCYHV6wUA23q8cLVQAAAABJRU5ErkJggg=="
goblin1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAZCAYAAAA14t7uAAAAAXNSR0IArs4c6QAABNJJREFUSEuVlXts01UUxz+//rqu6x7d2q4v9sge3ZNZHjI0JiCIQRA1qBtRQjCiJmAEIsEEhkhEiWQQNLA/JECyhJAoysOEYMY0CCqiMNh4uY0xgbJu3ZMx1vbXX3sNIMgsbnD/urn33M8993vOuUdimGEzFwliY5BCAkk7gNd7SRrO/v69KEOn3S1EJIAsFHYcbuTZIgWIv30m0+HiSvvFh4IPMco0Z4uq3+pw515j/Y7DrJ1dSuXGPwhkZmNta2XTlo10dD0i2GHOEzs9tRz45idE0EvlgiV8uG4rK1YuJJE+wIy/SSFv8gQ87Q0jen3PwOrIF7NWV7LU9QKBsbB35wHWLXoetHeU6wIsKNhspfh89Q8Hdlpd4kTHYRxBPcSaWLNiG7OXz8VtivsnHn7gztzmHI3Pe25kcIYlT3x3eT9uQwGg0I2OjdUHKZs/hQF/B6PjMkm5L9xO22N4fWdGBjtNWWLRhh9ZMieTBIPEcU+QfVVfMnPtYm74wJ58khzDeIxA/xlIKoF0WxEe34Vh4VKaI0dUfbSLjidyeb3PRIMRNMlQU/s1Gr2RlTOm09oCyaU9mDAikDne4KdsqhtPd/P/wm9vOKzFYkflbk4khkjLCtP3Zz+GrkQK541j35ZPmbasghn6O3r8ftNDaXwadmcOspqIKoXw+c5HXXBvIdNRIhR1AEmrY2F1DaakyyyYOB7llyYSn8rhLCoO0YNZcpCVWsqc7ws5+nMvSRlO6t+tw/ufgD7wKRmWfLG0uobZMzOw/NVMQ4aL4nowjgWnPZ9ZRwpJHTShDQ9Qf0hDV0TQ/EXjkDR8IHiUNU9EJB0VH1cx4R0DsaqGdC2Mcc6laEMxtqkRHEYjXq1EpN1L90E9J9ecRSIGjVDxtjdLUWC7LVfM+9ZN85F+Tn1+GSUcg5Bk0IbI+SADXZIOJaCSoA0jp8bQ16siDybT8tkFksuymf4K7Co/TxTY4cgVOavGc7R3Ej0GwWtqLWpkAJ3GTCQUi+xqQ76aiBKR8TuC6BUjA71eWiuvUbCoAINbcOrNpmiw1ZYtUt4YTeEoP3uVJ5lirkcfkPFr4xA9EVL0fRz75AqPv59HjDGOutWnKF5XwOmKJmzlJsxP22l872Q0+FZKWS1uYXnOjEarRYTDpJfH09/jRzJrSCCe8/PPUbg5E42aSN2yJnI2FeNZUkfK2w66tnlo62qJ1vhu9dosJUInC8JikKwKNyIJdGoCSo+CnD2IpU9lsC2VsNaHkmXl4uIThOUAHR13msGINZ/mKBaZW4swNUYI3AhzUytxaNUeXC8+g+iSafu1hknb59G64hiezpZ7vBHBt27PsOcIw+QScsdq8Wtk9HaZQEhCiVVRB67TWnGR9u6hDWBEcKp5tNDrgighcJTnkV3byaVZBtRQCtYf2mns7EMlho7OoZ//sOB0a74o2V7Cje5+WrcHyXrLyavVvex/KZ5QXALjDnSw+/hVxi3O48SmM7R3/uv1sGC7tUBM2DyBlpPXuN4QpCwArhgNQW2EzmACyRoNVaevYnnZTOceD1e7HkHjNFu2kISBkDbAmok2FJ+e9Re9FKXHog4YOHe9HZ0i4+luGuLkiBrfTT/X8mkiuPMKaiSMRhZEQglIkh/rlDGc+mp3FOdvqJLhJRGB1TIAAAAASUVORK5CYII="
goblin2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAA31JREFUSEvtlV1oW2UYx3/nnKQ5SU+6tmmSJm3StE1dOm3XsTo7dqUIKoIowhRBmKAV0YoMVBTxwjvxRpwyHIIXFtmFN7tQ571OVrFb27WuLV3XNB9LYpqvLmlOcvLKhlO31jZ+MLzwvXx53//vef7Pw/NI3IYj3QYG/y1Ip2e3QMjolQqS2QSyQBgKFrnManxp22DrysTn6hZ9H4awZXSc95loijqQvDl+nKqirTQz894FIonZP9XaEdLhCYnhY/vJSnl0oTF0SEPWw7j97ax+W2J5Oo/m1ZgcvUg4dWFLvS0vPY49wjCVMFXtKHIB3yv30BCs0pCzoa5F2DvqYlkzYzYrmC8pzJ+MsHQsjKHr1GSFxM8LN+lugvg93eLJ2EEWx9dI51qoyRJyW5nWjIrRsUZtw4m+mKEoNSE6s9jkCsJkZWFsFvsTgzz8jsLnwSmifwBtgnjdIXH38Ts4sXSQXesah+UzrLcksZbBsLVRM1swRBwp68FmL1BUBbVdGnNj37PvowCWvI2Jo3PE0r83wyZIh3OPaHvWi2vEzcnVe3ku/RU5GTYGbDSmy2xEytibBbpqoViygGkDNWVl5uNJ3A/2EAgpnPtgmkhs+TftLWvS6RwQtiNdmFYM5BYFT7tEQ08VseYgb00x/3aUvjeGkNeThI9H6BwdZvnEBO77u4h/GSORntm+JjcmgMt5pwATsigx/OIw62qepoBBRq4wP7ZC30v9uJrg7LuzHHg/yMTLS9SqVq7cArimt2ML+929ov+TXkwlN6WFOPZ+FTKtXK0VKdoNGpIqLY1lzr6+SGwLQF2Qa498bQOi+bHdNHtUGrUkX7/6DV2HHkVpE1w6dYoO910ooowka4QT5zcFvmMmN+zzOwaF9kyAwmcLWI4EoQL+0zkupnNE576DVo3Hxx/gzNE4V1J11uTW6dzu6BGup/fiH9zgh9fCKJJBVTKTSEzDVaDx5h+SJG3fXVuNf5+7Rwy+NcLqfBnvfgtVR4aKrnP5hRSXk1NQA2RIU8CBmRIqtl9BddvV6e4Xhw80MT5RwPlICEtWwf+UxMTzc0QTM9fjml5apaPXh8OAlUqEgNV3Xb9uyJsPjYhPJwsIWcKCTkWSkQz44vxPDFWLxEp5CGYpp62U813s6/0bdm23QU+HUyJg2Al1q/VP4X97Jddt1z8B/w/5S+79Av6YSCkex/POAAAAAElFTkSuQmCC"
goblin3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAZCAYAAAA14t7uAAAAAXNSR0IArs4c6QAABNtJREFUSEuVlXts01UYhp9fu7Zr17Vjl7Zr142x0l3s2HByGcYgGDQgGFCUECAiAYMSjRHQqERjiAhImKIMwWgwaNQgUTSES+KUBAGBMdyK0I1Ndt+6G11vW2/HMAJChmx+f57z5jlf3u9yJO4RptQcIcnUgEARk2jqdkr30t9+N0yYkV4kRCyKTIpyuP0C96HEDyQA1hQbLb31o4LfITKbHaKi9QAZDVHe+fUM2woW8EL1t+iaJJIjfsr37aSp/cr/A1tTcsTR74+z/4/zRLzXmD93GXsOf8177y4hBQFInAKetjhobbs4IvyWwGi2i3lLV7Dj2dc5F+3lm58OU/7WPECHPwYJPujVQUGqnc6eutGBLWn54sjBKqylKvRE2LThGG/MyUealg0E8KNhAEgBjGmFuEdRRMmc6hBfuQ8wQ7IPFTXkhe0fHmDV7FnoH5ARh/ZGsT2CgF4iP61wVN0hmQw5ouxoBU8NWIhMjdJfOcDm0ztYu2gNatcgCVIQxaRs5AqoPx4gZ7qSDMsEWtsu3dMOKSN1nFjz8xHi6yWWL/HQLRLpkkzs/+AMhmAVz7+9msrGRPJbash4sJAAoMKHxTCZzq7/hg+9ajAWig1bdpMoeegKDZLsKCY4EM+sh4189uaHbHrlSZTaTPwakPn6UWt1mCwOpGiQmKTE3XF5WPa3DjLTC8Xg9XzCKnb+sI/IX/UUzp2JL+hhsmEctVcbsau6wV5CVrqN+XtLuOpS0meMUfdqJR1trjvgd/UpPW282PzJHp4xmmiT51GfBOM73Yx9xIDZ4mBlax59/SpSGjxUHdHgNfZRu6GF1rZ/M78rODO9SMRCIdYfKmPylGnYCND/ezKlC/O4f1sO1iIjakOMuHgY9Hu4ci6ZqpVnUBImKlfQ3u6ShoGNpgKx9HgRroN9OLfXEyQOVVgQkYco2DKehFCUSAy85lTiXX0kZMkJunRUf3SexJW5LJ6hpXy5k2Fgk8kmSnZNYf+JXNRSmAVJVXQXJaCrGiSWD1Ij+AYkotog8TaBOixH9reeyq1nKf50KqqAjJNrTw8HW825ImWOnTGOCBX+YuZlNRFW+/E6NSRO7ETWoKPy/TqKPh9LfI/EhXUNZK7Jom53PYmLHBhtauo31gwHX2+/dHO+SHo0h1hwAE1iHMkloJbJ8Gm1qJrCXC5zYvmilPhAhIsvnyX344nUvuhEvzCHwMEGmtsuDvf45rK2miYIEQkgKeKwbbQjc+sIRLtJt0ZwJ40hXlIjo5tQLAFNJIBzdTNRBbR2VA/ZO+KWshhsInvXJPTNXny6EJExMk7MP4xl5kzEgKDt5CEe3/sc59e56Oj58xZvRPDQZKbkCf1iA2MfMhNqjaC1+vEGQiT4NSg1YU69dgW3+84PYERwZmq+EESQ5FGUC2wYK/rxTFcij1NhPBWgprkTZGrau2pGnrybPmekjBMFX+bjq5XT8lsM+yrBnO0+jj2hQ2XTUrqjkfKaXux7Sqhe4cTdPUorMtMdwlpmw/tLH12X9KzXDuLX+On0hHEkphLsuca2Oi+ax6x4jrlw3/YfjmiFMS1bXF/GIgyrHWn0K5L4znmZvDQdMbmeK+0tSGho6bzRDTdjRPBNYfFLs0XXgUYiYYFCFkWKxiEpYqiW5VG39cdhnH8A6q3mNADodvkAAAAASUVORK5CYII="
goblin4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAWCAYAAADNX8xBAAAAAXNSR0IArs4c6QAAA+JJREFUOE+1lGtMk1cYx3/v25ZSrZJiobSUSyoUJyKIGKcjznlZskgWk5ktxiXsg9MPbn4w0YSMLeIUss0s3nAhYV4yb6Db2MgSs41tMDYVQS4yEIdkA1oKrVJxvVDa9yzByFRi4gd3Pp1z8pzf85znnP9f4hkN6Rlx+H9ASfE2EZb0SMKPLOsYdF1/6kRTgYmWBWJw421IXUVS2VXEuBYkCYen46lgk0EJlkwxtM3LgF6QvyeGm1VN3F3tY4l5LUT8CFlPKDKBWpYQsoLT1T0NPrmRaMoRH7wUoaTOz9ayKt7IW4yS7ePQrnJqj53g+kkTBtnCnd8acMyMUHDISP9j174Pip8nPlypUNIYzZHSkywpzKH/Vxenak7wzcnT1G92k+JX02tWSFOrGfhFz/KmaAY9rVOVTU5S4jNE6ZowO39Q8+lnxyl4bRnaMGz9aA+15dWMvOOlNzZCUkDGPyEwhFWMNceS3hhmxN01yZBSTFliQpaQhIQsB9hfXMXchc8x/IKD80Vnqfu8mv5Nt2HVCob76zEmZ6G68QeoBAmlRrSae/S7+iTJZLGJbT/Np/FCkM7DTkorSkgt2MBSlY+i7cc482U5w0VBhppiYLmHwD8KobZkoi1O1gaXsnpHFF/nNSMlWuxi0e5UasXzWN+rouzgt+SlmjFkzGLvkRpqyt9ncMcYbS0xzEj3Ipsk4q7E0qEIypbaQe+jtfhvJKsxS+gKDWRYk2n+5DK7T3zPunwLM9pdvHv6K+rPHeXQy1pe1OrRBQM4dCFm3daSewkMm+Zgzk2ic2fTfYnEWTKE4VU7/gt/UVFciemVLIJ2N8fL6vju8D4Iq1l0IBvdPYVLxR3M257DzYM3iN9gxVl7i2Fnj/TQz84UjGs4/2MrjV0t2P1x7D9VSV/XGYRaj600HQM6hMOPSuOl7cAQE0QYGuq5/2oP1G+KtwlXYQbOgRDtIT/5ksLVMYXo2TIbL40SyrQgyRGcFxtYX7Oeli19DLr/0+IUyGxKExo5ivTYGIKqIKYAjKsUWt0+JtRRZBywoRs1oE1UuLb5Ck537yMyeWRhnpMtZDXIjPPm3GSspruUNHgxv25BoGP2z27+9HpAzGR4uPPJIGtcmsjdtQRFE2D86B3Wp6jZ2+4hd48V72gM+fVjfNHSTfbHeXQU9eBwtT8qkQd9SrAsEIv3JeC4qsV42cP8mbFUd9/i7RU2jH4/XkVD5bURdOvm4LvowfFQVdPsINloF+NRQEhBJQu2LEyiosvBskQzIuzj94EAQi0YecxKnmha9rdWimCtZ7LxsiKhyAoqoSJujY2OsxennfsXq6mQIphqodwAAAAASUVORK5CYII="
goblin5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAAAXNSR0IArs4c6QAAAyJJREFUOE99k11oW3UYxn/nnOQkadI0aU7afLXpGpu1pqPaUUb9xIuxgfZKOqYX4lUVFGQIIoIgaEXHUJgOvZyCF144UEHvlIH4sWVrR23TtM2K2UzCSZs2S5s0H+f8xYKbW7Xv1cvL+zy8PO/zSPxPBboSQrK0kBt2FFGlhoyKgsAkt74o3QvbM/h7oVcbEpHXB3F7W/TFBB2PdyJmiixdbmG63Fw6laKgL9yF3UPUpcXF+OkHMW4K1p0VxibtlLNWgtS4dUBj/rcCjlUnC+/PkdXTt/G7Tbd2SCjSNqbsQMgyI59GqKVMDM1PV1sNTbPi9gqqfjuNqIXld6qsnEtitBRkyaRQXJKksK9fPLt6hEuf17AFtjENF84/bOwMrFGZ96A5rZRcdVx1hXp5C5faTsm6RWZ6Cd+xIZ6Y6uCbkzNIAf9BET8zwMXFh6FDZ8KTpVpUUUIqhrdBfU5FG2lRmS+CqiJv2bGNlJmZusnAdBTT8JN56xekUHe/8D0WxT0R4afkYR59KImzrYkjo1K0NvFtVpk9l2L0lQOYDpkr7+bp/yTG6svLaJMh+kIefj59jV2NekNDwvVUDFNuYtsxicatSL0NNstuPGsVrnycZezUfTQMF7+fXST26gALHyzSORFl89s0OX1Fuq16JHi/aJlNLLLE6JlD1FZVaOrYXTZKPV60dIFbgxbsmQAECyTfuIFkCHQ9tcux9/3BfnFkapzNcAmb38Bagu9OfknkxPOYSp3c19/zyHvPcP3DWfL6HWP+pyG7tIQIT0ZoDzpQElZEqonaYcFsa+FwO7j6YpI/15f3N2RPYFDUWwpYBP7jfg7ObXD9cJAdF4R/2CGdv4EsK2Tz+xB1B+Ni/M0YWzUHC19V6HtN5unz21wY8+IYbufoZyuc/XWN4RcSpD7KkF27E5O7zosEEqJ3epjyUo2NqxVOOLexVOyETUGraWVdqnM+VaT7WJz8j8vouXsi8u8kB0IxIUwHqmHw3FAPPW1V3r5c4AFfBATMbhQwVBuF3LX9NfqHdPSlJ4V+IY0soN60gQUQFjqPekh9cXHPk/4Cuyk6JTBv+dEAAAAASUVORK5CYII="
goblin6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAA3lJREFUSEvtlVto21Ucxz//S27/tWnT5tY0W2ub0qzdurKtFLQ4YauoL8o28EEEkYEifbDvyhTHcIoIvkzEB0GoiuxBYQ/CxJc9lE1mXW/p2pI2abtkTZslS9MknPyPbFhvXdvMwfDB83g4fD+/7+92FB7BUR4Bg/8WpLGhVZZRUU0dIQS61YEUoKuCeHJi22ArcuL1tMjHT4cQHifhvlpUsUDZ4mLsiywFJNGPFoitXN9Sa0dIwB2WXWf3UrTasBopwkeaydhSGONOnNUmVy8qFMJpZl6PkkyO31fvvpf++napWOxQBlMp0vb5bmpH3SiBPHrBoO41Sf2wgUWaLBywEBvKceOtXxCaQDXhZnLmb7qbILv9LfLVnw9yacjAub5CrktgmfdR5VhCS1ZDt05R2ChmS1RlQWQF+aZdTAxeIdB/gGfPl/mybZL48p912gTxekKy+41D/KA/A0aa55y/Ilfi5DQVR7OCMiUpGRqqYiAdVpwFQUEtcP2dacLn2pGlMuPvxlm+NfqH9iaIL9AhfS+GaD5Y4LtoD/3qDYpuQV1tFjmnIwwFrVBHxmXiVO6gLRVR7S4ufzCC+5VO2pt1hs9OkFjaxsnd4fQG9sn6o41IfwkKZfY8bWBPVqPl0+RKVYyem6Tnk14KkSUmzscIvd3L5JkRvCd8LH+9QHI1sn1NNjZA0BuSqHZKpknPx49RShSxrVeRbcox82aS3g8bWa0VzA6k2P9+F2ODlynZ7CT/4mBDa8cWbgzsl4cHuqBN43bkJobfRcYoYmRV9Jwga1qQnWtET82RSExV3sL/3GfBhlZpeyrIviMu8nkHF08NETrZh2mzEf/+RwK+MBbVjoJgPrF5VnZ0sgH0e9ql71gDiZ/S+F4OQLpI8MoqI6k7LC7O3Ht27MJxIgNRFhMjldVkkxt/hzRe8tK4x8PsmUmK0sSmKcwnxgABOR1MyDjL1KChKMrWLbzV6vd72mTnZ4dZ/TZL0ws1pJYV7MoakffGiI9HKLk0rEAeMIAcUP07qOJ0Bb2t8njIx4WpFPXP70VzZ6jptjA7mCIWuQa1MLcAzUETyHDpWoz+Q9339CuGfNr3pDw9fQurLINioIq7sTr4KvYN1vUO3DOgqhl2dWeouVpGf6LlwdO13Q86LKfl2m03R12uf9/CD/tFV5yuhwH9D3mg7P0GCHdLKVTQ6dwAAAAASUVORK5CYII="
goblin7 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAZCAYAAAA14t7uAAAAAXNSR0IArs4c6QAABNVJREFUSEuVlntsk1UYxn9fv3ZrWdtdelvX0bExu1vpuHoBhIFCGP6BkyCBICFGiAkqEUQBBYlGIBITIJoRA0RJJCCKFzQmgAghAQQGG7sDA8c2urEyoO220m/9jgGVi8MNz18nOU9+5znPOe+bI9HHcNhyhCz3oCp6RHyUtivnpb7096/1EmY4c4WiKMg6LTUNdRgNt+WdQAJuaw5N1849EvwBUYalUHwWKCf7WCulVcdZPCOdrTvKUUw6OusVvt7yMa1tj+b6Lthu9YrDPx1l177fCNsDTHjiZX7d8wOffDANwkAkxqGAzNwxg2nquNiv67uCtNQCMe/N1bxdNJlOvZlVv+xmyzsz7sQWJoDxzsyK01pA67WaRwNn2Dyi4ex+ZL0bkuC1nWtZMHE6PrsHCBLDjPz3zTgd2bRebegfPNCeJWq/ayDhKYWIpEMLLFm7huIXVqCT4ZnsB9/BIJuPxkBl/+BUS7ZY/9WXWBNGM2Us3BCwYt1mFi6fR2NXGOcFK8O80KUBP5dIJ5OctFwa/fV9wiVXaq5Yv2IjHQ4nkzxD6PD48SHz/kffYDQ7KS4pwRtupGZ4gJGMQAGqDwmmzvDiD/x31nd2TXP4xFulhzB11hIy56FLr+ZW0MDTRSPYuXM7654bh2qyosdIWwwccgi3bQy3pC40aGlt7+3+7nHSrXlCFgqqVs+Gbau4kDic1+2D6b5SQ8r4fC6pLZg1LiyAO20o83elUXbYhJTSxamVl2nuOPtANA/NKcPhE+99u5Ws7ESyugdhiFRTrUhMHFJIpsvHrN2j6Paq6E1dVGy5wS01marV5Vxtvef8oWCnM0doEWz+YhcDioaSpkYJlMUxc9pjeDdlkm/NwBgnEclSuOa+SaDURNmH5agCNKpC89VaqRfYbs8Vc34fScWBm1Qub8AgK8Qk6FH1eJbYMRQ40NWEwdKJ1AwRKZl4nYETm07gKM5n3Jwk9sw+TS+wy5Itcj99kgNHXZBkZPqoI6inUxEFUYQaIRIShM0CSyCO67owA7qtxIUjnNpYT8HiHOKzrlP2xh8PAdsKhGWSC9PMFH6uHc289IN0hGJgVjHKKp3nNTRsbMK9MhdTVpDaVy7jXebizLpGkuf6yBlr4OSCY73Bt5+f2+YTupfSSYiGiRjjyXckEUVFN1imMxiienELnnczwRqlftFFhm8YRuXSsyQXe+jYW0Vz+4XeGf9TwC5rloiJeECLd10GsWAyJtGG4kokeC6epMQQocweCCiI9hTqNlWgjUbxB/7qI/3WvNOSLwrWjkBRNCTF+7luUflxyn7yiiYjm4007dvDpO3PU73sPH7/vUrsF3x79/RUn0ianU3iODDXSsSMPQywdNNVp0XOEFQtbaHpUQrk/n7msuUKWRsjFosjaWomllNBghMS6JKjZB4JUdEcQo5JtPyrb/TpOD3NI/IWuSElkcodQQpLLBTta2fvq1pMZQaKTgYpLWukcOHjnNl4hub2uru8PsEDrUNEwTYvV4500FGZQInmBnpND4lSD8EeI4Mi11lTH8E23k7gsJ+mK/8jY7clSwithh7VwIs5RsxSMp/X1pHvzsAUheP+dmRZxn+1ov8m9LC/w7D5z4rm75uIUzUosiBOUlFUPSmzrNRuOtjr5H8C5HHZMAH6tWgAAAAASUVORK5CYII="

function getGoblinsBase64Conditonal(src){
    let x = (src == goblin1 || src == goblin2 || src == goblin3 || src == goblin4 || src == goblin5 || src == goblin6 || src == goblin7)? "t" : "f"
    if (x == "t"){
        r = true
    }else{
        r = false
    }
    return (r)
}
setInterval(FindPlotButtton, 5000)
function FindPlotButtton () {
if (btnText == "stop"){  
    console.log("Finding PlotButton")  
    plotButton = []
    for ( let x = 0; x < main.length; x++){
        if (main[x].getAttribute("class")  == "w-full h-full relative" ) {
            let a = main[x].getElementsByTagName("img")
            plotButton.push(a[4])
        }
    }
    chestBtn = document.getElementsByClassName("absolute w-16")
    if (chestBtn.length > 0){
        chestBtn[0].click()
    }
    closeBtn = document.getElementsByClassName("bg-brown-200 w-full p-1 text-white text-shadow text-sm object-contain justify-center items-center hover:bg-brown-300 cursor-pointer flex disabled:opacity-50  w-full mt-1")
    if (closeBtn.length > 0){
        closeBtn[0].click()
    }
    goblinBtns = document.getElementsByClassName("h-full object-contain")
    for ( let x = 0; x < goblinBtns.length; x++){
        let gsrc = goblinBtns[x].src
        if (getGoblinsBase64Conditonal(gsrc)){
            goblinBtns[x].click()
        }
    }
    DetectectPlotImage()
    }
}
function DetectectPlotImage () {
    plot = []
    for ( let x = 0; x < main.length; x++){
        if (main[x].getAttribute("class")  == "w-full h-full relative" ) {
        let a = main[x].children[0]
        let b = a.getElementsByTagName("img") // plot
            plot.push(b[0])
        }
    }
    harvestORplant()

}

function harvestORplant(){
    for (let x = 0; x < plot.length; x++){
        verify1 = (plot[x].src == seedlingB64 || plot[x].src == seedlingB64_2 || plot[x].src == seedlingB64_3)? "t" : "f"
        if (verify1 == "f" ){
            let h1 = getFirstHandleValue()
            console.log(parseInt(h1))
            if (parseInt(h1) > 0){
                setTimeout(() => {
                    clickElement(plotButton[x])
                }, 1000);
            }else{
                console.log("no handle")
            }
        }else{
            console.log("already planted")
        }
    }
}

function clickElement(e){
    if (btnText == "stop"){ 
    let h1 = getFirstHandleValue()
    if (e.src == selectedplotBtn){
        if (parseInt(h1) > 0){
            e.click()
            console.log(e)
            console.log("done")
        }
    }
}
}

function getFirstHandleValue() {
    let Elem1 = document.getElementsByClassName(" text-white text-xxs")
    let Elem2 = []
    for (let x = 0; x < Elem1.length; x++){
        if (Elem1[x].getAttribute("class") == " text-white text-xxs"){
            Elem2.push(Elem1[x])
        }
    }
    handle1Value = Elem2[0].innerHTML
    return (handle1Value)
}
//Baka Allen Tumbagahan yan
/*
//find inventory
for (let x=0; x < findinventory.length; x++) { 
    if (findinventory[x].src == "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMBAMAAACkW0HUAAAABGdBTUEAALGPC/xhBQAAABhQTFRFAAAA9nV6oiYz5DtE13ZDdD85vkovGBQl2WxtxwAAAAF0Uk5TAEDm2GYAAABOSURBVAjXY2BgLy8vYGBgKHFxcQdSZeXl6QwM7MKF5sIFDMVGSkrK5iApkGRZGhCkM5SHAkE5Q1lqWlhqOkNZGJBOZygFctLCQWYBTQMATTUW2/GKHakAAAAASUVORK5CYII="){
        console.log(findinventory[x])
        inventoryBtn = findinventory[x]
    }}
 */


// Add Toggle Button

    mainBTN = document.getElementsByClassName('flex flex-col items-center fixed z-50')[0]
    element1BTN = document.createElement('div')
    elem2BTN = document.createElement('button')
    elem2BTN.innerHTML = "start"
    elem2BTN.setAttribute("onclick", "toggleBTN()")
    mainBTN.appendChild(element1BTN)
    element1BTN.appendChild(elem2BTN)
    btnText = elem2BTN.innerHTML
    console.log(btnText)
    function toggleBTN() {
        btnText = (elem2BTN.innerHTML == "stop")? "start" : "stop"
        console.log(btnText)
        elem2BTN.innerHTML = btnText
    }
    