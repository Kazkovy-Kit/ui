<script lang="ts" setup>
import {range} from "@antfu/utils";

const {t} = useI18n()
const {breadcrumbs} = useBreadcrumbs()

const ready = ref(false)

onMounted(() => {
  ready.value = true
})
</script>

<template>
  <SidebarProvider>
    <Sidebar collapsible="icon" variant="floating" active="a">
      <SidebarHeader>
        <SidebarMenuButton size="lg" as-child>
          <NuxtLink href="#">
            <div class="size-6">
              <Logo/>
            </div>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-semibold">
                <slot name="name">KazkovyKit</slot>
                <small><slot name="version">v0.0.0</slot></small>
              </span>
              <span class="truncate text-xs">
                <slot name="slogan">Dashboard Layout</slot>
              </span>
            </div>
          </NuxtLink>
        </SidebarMenuButton>
        <SidebarMenu>
          <SidebarMenuItem>
            <slot name="guilds">
              <SidebarMenuButton
                  size="lg"
                  class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground group-data-[collapsible=icon]:mt-2"
              >
                <div
                    class="flex aspect-square size-6 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground group-data-[collapsible=icon]:ml-1">
                  <Avatar class="h-6 w-6 rounded-lg">
                    <AvatarImage
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuserstyles.world%2Fpreview%2F1197%2F0.jpeg&f=1&nofb=1&ipt=457905539121bda76633e0a35ee14520fae1f75e68ef7f0df78bd86030621ec6&ipo=images"
                        alt="Kazkovy Kit"
                    />
                  </Avatar>
                </div>

                <div class="grid flex-1 text-left text-sm leading-tight">
                  <span class="truncate font-semibold">Kazkovy Kit</span>
                </div>
                <Icon name="lucide:chevrons-up-down" class="ml-auto"/>
              </SidebarMenuButton>
            </slot>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{{ t('general.modules') }}</SidebarGroupLabel>
          <SidebarMenu>
            <slot name="modules">
              <Skeleton
                  v-for="_ in range(5)"
                  class="w-full h-8 rounded-lg"
              />
            </slot>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <slot name="auth"/>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail/>
    </Sidebar>

    <SidebarInset>
      <header
          class="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
      >
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1"/>
          <Separator orientation="vertical" class="mr-2 h-4"/>
          <Breadcrumb>
            <BreadcrumbList>
              <template v-for="(breadcrumb, index) in breadcrumbs">

                <BreadcrumbItem class="hidden md:block">

                  <BreadcrumbPage v-if="index === breadcrumbs.length - 1">
                    {{ t(breadcrumb.title) }}
                  </BreadcrumbPage>

                  <BreadcrumbLink v-else-if="breadcrumb.to" as-child>
                    <NuxtLink :to="breadcrumb.to">
                      {{ t(breadcrumb.title) }}
                    </NuxtLink>
                  </BreadcrumbLink>

                  <BreadcrumbLink v-else href="#">
                    {{ t(breadcrumb.title) }}
                  </BreadcrumbLink>

                </BreadcrumbItem>

                <BreadcrumbSeparator v-if="index !== breadcrumbs.length - 1"/>
              </template>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div class="absolute right-0 mr-4 mt-2 flex gap-2">
          <LanguageSelect/>
          <ThemeSelect/>
        </div>
      </header>
      <div class="container">
        <Card class="p-4 mt-2 min-h-[90vh] relative">
          <Skeleton class="w-full h-[90vh]" v-if="!ready"/>
          <slot v-else/>
        </Card>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>