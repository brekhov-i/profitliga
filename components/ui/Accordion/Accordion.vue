<template>
  <div class="accordion">
    <ul class="accordion__list">
      <li class="accordion-item" v-for="item in dataItem" :key="item.title" @click="onOpenItem($event)" ref="items">
        <button class="accordion-item__control" aria-expanded="false" ref="accordionItemControl">
          <span class="accordion-item__title">{{ item.title }}</span>
          <span class="accordion-item__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
              <path d="M9 20.7899H31" stroke="#00AB2E" stroke-width="2"/>
              <path d="M20 9.78992V31.7899" stroke="#00AB2E" stroke-width="2"/>
            </svg>
          </span>
        </button>
        <div class="accordion-item__content" aria-hidden="true" v-html="item.content" ref="accordionItemContent"></div>
      </li>
    </ul>
  </div>
</template>

<script setup lang='ts'>
import type { TAccortionItem } from '~/components/ui/Accordion/AccordionTypes'

const props = defineProps<{
  dataItem: TAccortionItem[]
}>()

const items = ref<HTMLDivElement[] | null>(null)

const onOpenItem = (e: Event) => {
  if (items.value && items.value.length > 0) {
    const self = e.currentTarget as HTMLDivElement
    const control = self.querySelector('.accordion-item__control') as HTMLButtonElement
    const content = self.querySelector('.accordion-item__content') as HTMLDivElement

    if (!self.classList.contains('open')) {
      items.value.forEach((el) => {

        if (el.classList.contains('open')) {
          console.log(el)
          const control = el.querySelector('.accordion-item__control') as HTMLButtonElement
          const content = el.querySelector('.accordion-item__content') as HTMLDivElement
          el.classList.toggle('open')
          control.setAttribute('aria-expanded', 'false')
          content.setAttribute('aria-hidden', 'true')
          content.style.maxHeight = '0px'
        }
      })
    }

    self.classList.toggle('open')

    // если открыт аккордеон
    if (self.classList.contains('open')) {
      control.setAttribute('aria-expanded', 'true')
      content.setAttribute('aria-hidden', 'false')
      content.style.maxHeight = content.scrollHeight + 'px'
    } else {
      control.setAttribute('aria-expanded', 'false')
      content.setAttribute('aria-hidden', 'true')
      content.style.maxHeight = '0px'
    }
  }
}
</script>

<style lang='scss'>
@import "assets/styles/functions.scss";

.accordion {
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    list-style: none;
  }

  &-item {
    width: 100%;
    height: auto;
    border-bottom: 1px solid var(--color-white);

    &__control {
      width: 100%;
      height: auto;
      padding: vw(24) 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__title {
      font-size: vw(22);
      font-style: normal;
      font-weight: 700;
      line-height: vw(32);
    }

    &__icon {
      width: vw(40);
      height: vw(40);
      border-radius: 100%;
      background-color: var(--color-white);
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 90%;
        transition: 0.3s all ease-in-out;
      }
    }

    &__content {
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      will-change: max-height;
      transition: all 0.3s ease-out;
      box-sizing: content-box;
      background-color: transparent;
      display: flex;
      flex-direction: column;
      gap: 16px;

      ul {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 8px;

        &.list--dots {
          list-style: disc inside;
        }
        &.list--numbers {
          list-style: decimal inside;
        }

        li {
          font-family: var(--font-serif);
          font-size: vw(18);
          line-height: vw(20);

          strong {
            font-weight: 700;
          }
        }
      }

      h3 {
        font-size: vw(18);
        line-height: vw(20);
        font-weight: 700;
      }

      p {
        font-size: vw(18);
        line-height: vw(22);
      }
    }

    &[open] .accordion-item__icon {
      img, svg {
        transform: rotate(45deg);
        transition: 0.3s all ease-in-out;
      }
    }

    &.open {
      .accordion-item__icon {
        img, svg {
          transform: rotate(45deg);
          transition: 0.3s all ease-in-out;
        }
      }

      .accordion-item__content {
        opacity: 1;
        padding-bottom: 20px;
      }
    }
  }
  
  @media screen and (max-width: 1500px) {
    &-item {
      &__title {
        font-size: vw(28);
      }
      &__icon {
        width: 35px;
        height: 35px;
        svg {
          width: 90%;
          transition: 0.3s all ease-in-out;
        }
      }
      &__content {
        ul {
          li {
            font-size: vw(22);
          }
        }

        h3 {
          font-size: vw(24);
        }
        p {
          font-size: vw(20);
          line-height: vw(22);
        }
      }
    }
  }

  @media screen and (max-width: 468px) {
    &-item {
      &__control {
        padding: 10px 0;
      }
      &__title {
        font-size: vmin(14);
        line-height: vmin(18);
        text-align: left;
      }
      &__icon {
        width: 35px;
        height: 35px;
        svg {
          width: 90%;
          transition: 0.3s all ease-in-out;
        }
      }
      &__content {
        ul {
          li {
            font-size: vmin(10);
            line-height: vmin(12);
            strong {
              font-size: vmin(10);
              line-height: vmin(12);
            }
          }
        }

        h3 {
          font-size: vmin(12);
          line-height: vmin(14);
        }
        p {
          font-size: vmin(10);
          line-height: vmin(12);
        }
      }
    }
  }
}
</style>