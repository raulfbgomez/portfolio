<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Plan extends Model {

  public function users() {
    return $this->belongsToMany('App\User');
  }

  public function frequency() {
    return $this->belongsTo('App\Frequency');
  }

}