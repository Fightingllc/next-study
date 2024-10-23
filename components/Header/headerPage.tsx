"use client";

import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  HomeIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import clsx from 'clsx'


const products = [
  {
    name: "InputOTP",
    description: "功能齐全的OTP输入框",
    href: "/inputOTP",
    icon: ChartPieIcon,
  },
  {
    name: "Lexical",
    description: "由facebook开源的强大的富文本编辑器",
    href: "/lexical",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "GSAP",
    description: "JavaScript动画库",
    href: "/gsap",
    icon: FingerPrintIcon,
  },
];

const notes = [
  {
    name: "顶级文件",
    description: "项目配置文件分析",
    href: "/notes/topLevel",
    icon: ChartPieIcon,
  },
  {
    name: "markdown笔记",
    description: "使用markdown语法",
    href: "/notes",
    icon: CursorArrowRaysIcon,
  },

];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  return (
    <header className="bg-blue-200 fixed w-full z-40 ">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* 添加一个Home图标 */}
        <div className="flex lg:hidden mr-4">
          <Link href="/" legacyBehavior>
            <a className="-m-1.5 p-1.5">
              <HomeIcon className="h-6 w-6 text-gray-700" aria-hidden="true" />
            </a>
          </Link>
        </div>

        <div className="flex lg:flex-1">
          <Link href="/" legacyBehavior>
            <a className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link href="/" legacyBehavior>
            <a className="text-sm font-semibold leading-6 text-gray-900">
              Home
            </a>
          </Link>

          <Popover className="relative" >
            {({ open }) => (
              <>
                <PopoverButton

                  className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                  SkillBox
                  <ChevronDownIcon className={clsx('size-5', open && 'rotate-180')} />

                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                >
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            aria-hidden="true"
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          />
                        </div>
                        <div className="flex-auto">
                          <Link href={item.href} legacyBehavior>
                            <a
                              className="block font-semibold text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                          </Link>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <Link href={item.href} legacyBehavior key={item.name}>
                        <a
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                          <item.icon
                            aria-hidden="true"
                            className="h-5 w-5 flex-none text-gray-400"
                          />
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}

          </Popover>

          <Link href="#" legacyBehavior>
            <a className="text-sm font-semibold leading-6 text-gray-900">
              Features
            </a>
          </Link>
          <Link href="#" legacyBehavior>
            <a className="text-sm font-semibold leading-6 text-gray-900">
              Marketplace
            </a>
          </Link>
          <Link href="#" legacyBehavior>
            <a className="text-sm font-semibold leading-6 text-gray-900">
              Company
            </a>
          </Link>

          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton
                  className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                  Notes
                  <ChevronDownIcon className={clsx('size-5', open && 'rotate-180')} />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                >
                  <div className="p-4">
                    {notes.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            aria-hidden="true"
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          />
                        </div>
                        <div className="flex-auto">
                          <Link href={item.href} legacyBehavior>
                            <a className="block font-semibold text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                          </Link>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <Link href={item.href} legacyBehavior key={item.name}>
                        <a className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                          <item.icon
                            aria-hidden="true"
                            className="h-5 w-5 flex-none text-gray-400"
                          />
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </PopoverPanel></>
            )}

          </Popover>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" legacyBehavior>
            <a className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
