import React from 'react'

const Indexjs = () => {
    function AddScript(path)
    {
      const script = document.createElement('script')
      script.src = path;
      script.async = true;
      document.body.appendChild(script);
    }
  return (
    <React.Fragment>
      {AddScript('https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js')}
      {AddScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js')}
      {AddScript('/assets/vendor/libs/jquery/jquery.js')}
      {AddScript('/assets/vendor/libs/popper/popper.js')}
      {AddScript('/assets/vendor/js/bootstrap.js')}
      {AddScript('/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js')}
      {AddScript('/assets/vendor/js/menu.js')}
      {AddScript('/assets/js/main.js')}
      {AddScript('/assets/js/dashboards-analytics.js')}
      {AddScript('https://buttons.github.io/buttons.js')}
      
      
    </React.Fragment>
  )
}

export default Indexjs


