<template>
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/nos-actions">Nos actions</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/festival">Le Festival</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/teams">L'équipe</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/media">Médias</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>